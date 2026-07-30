"use client";

import { useEffect, useMemo, useState } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const FRAME_SPEED = 28;
const PAUSE = 2200;

export default function AnimatedText({
  texts,
  className = "",
}: AnimatedTextProps) {
  const [index, setIndex] = useState(0);

  const target = texts[index];

  const maxLength = useMemo(() => {
    return Math.max(...texts.map((t) => t.length));
  }, [texts]);

  const centerText = (text: string) => {
    const total = maxLength - text.length;

    const left = Math.floor(total / 2);
    const right = total - left;

    return (" ".repeat(left) + text + " ".repeat(right)).split("");
  };

  const [display, setDisplay] = useState(centerText(target));

  const randomChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)];

  useEffect(() => {
    const finalText = centerText(target);

    let frame = 0;

    const stopFrames = finalText.map((char) => {
      if (char === " ") return 0;

      return Math.floor(Math.random() * 14) + Math.floor(Math.random() * 8);
    });

    const interval = setInterval(() => {
      frame++;

      setDisplay(
        finalText.map((targetChar, i) => {
          if (targetChar === " ") return " ";

          if (frame >= stopFrames[i]) return targetChar;

          return randomChar();
        })
      );

      if (frame > Math.max(...stopFrames) + 3) {
        clearInterval(interval);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, PAUSE);
      }
    }, FRAME_SPEED);

    return () => clearInterval(interval);
  }, [index, target]);
  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div
        className={`flex items-center justify-center text-center whitespace-nowrap ${className} `}
      >
        {display.map((char, i) => {
          const targetChar = centerText(target)[i];

          const finished = char === targetChar;

          if (targetChar === " ") {
            return (
              <span
                key={`space-${i}`}
                className="inline-block"
                style={{
                  width: "0.45em",
                }}
              />
            );
          }

          return (
            <span
              key={`${i}-${targetChar}`}
              className={`relative inline-flex items-center justify-center transition-all duration-200 ease-out ${
                finished ? "scale-100 opacity-100" : "scale-95 opacity-60"
              } `}
              style={{
                display: "inline-flex",
                marginInline: "0.01em",
              }}
            >
              <span
                className={`bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 bg-clip-text text-transparent transition-all duration-200 ${
                  finished ? "" : "blur-[0.4px]"
                } `}
              >
                {char}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
