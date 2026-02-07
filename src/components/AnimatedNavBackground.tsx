
import React from 'react';

export const AnimatedNavBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background - salt and pepper */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-300/5 via-zinc-400/5 to-zinc-500/5 dark:from-zinc-600/5 dark:via-zinc-500/5 dark:to-zinc-400/5 animate-gradient-x"></div>
      
      {/* Floating particles - silver/gray */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-zinc-400 to-zinc-500 dark:from-zinc-500 dark:to-zinc-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* SVG Wave - silver gradient */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-4 opacity-30"
        viewBox="0 0 1440 54"
        fill="none"
      >
        <path
          d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,26.7C1200,32,1320,32,1380,32L1440,32L1440,54L1380,54C1320,54,1200,54,1080,54C960,54,840,54,720,54C600,54,480,54,360,54C240,54,120,54,60,54L0,54Z"
          fill="url(#gradient)"
          className="animate-wave"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(161, 161, 170)" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="rgb(113, 113, 122)" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="rgb(82, 82, 91)" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
