import React, { useRef, useEffect, useState } from "react";

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener("mousemove", handleMouseMove);
      div.addEventListener("mouseleave", handleMouseLeave);
      div.addEventListener("mouseenter", handleMouseEnter);
      div.addEventListener("focus", handleFocus);
      div.addEventListener("blur", handleBlur);

      return () => {
        div.removeEventListener("mousemove", handleMouseMove);
        div.removeEventListener("mouseleave", handleMouseLeave);
        div.removeEventListener("mouseenter", handleMouseEnter);
        div.removeEventListener("focus", handleFocus);
        div.removeEventListener("blur", handleBlur);
      };
    }
  }, [isFocused]);

  return (
    <div
      ref={divRef}
      className={`relative h-full w-full rounded-xl border border-white/20 bg-black/50 backdrop-blur-sm p-8 hover:bg-black/70 transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
