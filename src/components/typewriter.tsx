"use client";

import { useState, useEffect } from "react";

type TypewriterProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
};

export default function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingTimeout, setTypingTimeout] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingTimeout(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timeout = setTimeout(handleTyping, typingTimeout);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, delay, typingTimeout]);

  return (
    <span>
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
}
