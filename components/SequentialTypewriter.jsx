import React, { useEffect, useState } from "react";

const SequentialTypewriter = ({ lines, classNameMap, speed = 50, delayBetween = 500 }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState(Array(lines.length).fill(""));
  const [i, setI] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    // Reset dòng hiện tại khi vừa chuyển sang dòng mới
    setDisplayedLines((prev) => {
      const updated = [...prev];
      updated[currentLine] = "";
      return updated;
    });
    setI(0); // reset chỉ số ký tự
  }, [currentLine]);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const text = lines[currentLine];
    if (!text || i >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => {
        const updated = [...prev];
        updated[currentLine] += text.charAt(i);
        return updated;
      });
      setI(i + 1);
    }, speed);

    if (i === text.length - 1) {
      setTimeout(() => setCurrentLine((prev) => prev + 1), speed + delayBetween);
    }

    return () => clearTimeout(timeout);
  }, [i, currentLine]);

  return (
    <div className="space-y-4 max-w-5xl">
      {lines.map((line, index) => (
        <h1
          key={index}
          className={`${classNameMap[index]} transition-opacity duration-500 ${
            index > currentLine ? "opacity-0" : "opacity-100"
          }`}
        >
          {displayedLines[index]}
          {index === currentLine && <span className="inline-block animate-pulse text-indigo-500">|</span>}
        </h1>
      ))}
    </div>
  );
};

export default SequentialTypewriter;
