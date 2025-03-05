import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="fixed w-10 h-10 bg-white rounded-full opacity-50 pointer-events-none transition-transform duration-100"
      style={{
        top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default CustomCursor;
