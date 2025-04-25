
'use client';
import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100;
      const y = (e.clientY / innerHeight) * 100;

      if (bgRef.current) {
        bgRef.current.style.background = `
          radial-gradient(circle at ${x}% ${y}%, #ff6ec4, #7873f5)
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 transition-all duration-300 ease-out"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #ff6ec4, #7873f5)',
      }}
    />
  );
}
