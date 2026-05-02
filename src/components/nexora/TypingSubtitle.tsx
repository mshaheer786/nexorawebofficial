import { useEffect, useState } from "react";

const PHRASES = [
  "AI-Powered Solutions",
  "Enterprise C++ Infrastructure",
  "Digital Transformation",
  "Social Growth at Scale",
];

export const TypingSubtitle = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? 40 : 75);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <p className="text-xl md:text-2xl text-muted-foreground font-medium min-h-[2em]">
      <span className="text-gradient cursor-blink">{text}</span>
    </p>
  );
};
