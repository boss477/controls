import React, { useState, useEffect, useMemo } from 'react';

// Types for our sparkles
interface Sparkle {
  id: number;
  left: number;
  top: number;
  color: string;
  delay: number;
}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Generate sparkles on mount
  useEffect(() => {
    const colors = ['#FFD700', '#ffffff', '#1565c0', '#b71c1c'];
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 30; i++) {
      newSparkles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
      });
    }
    setSparkles(newSparkles);
  }, []);

  const handleCardClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans flex items-center justify-center bg-[linear-gradient(-45deg,#e53935,#0d47a1,#1565c0,#b71c1c)] bg-[length:400%_400%] animate-gradient-bg">
      
      {/* Sparkles Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-1.5 h-1.5 rounded-full animate-twinkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              backgroundColor: sparkle.color,
              animationDelay: `${sparkle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Card Container */}
      <div 
        className="group relative w-[90%] max-w-[420px] h-[520px] perspective-[1500px]"
        onClick={handleCardClick}
      >
        {/* The Card */}
        <div 
          className={`relative w-full h-full transition-transform duration-1000 preserve-3d cursor-pointer ${
            isOpen ? 'rotate-y-180' : ''
          }`}
        >
          
          {/* Card Front */}
          <div className="absolute w-full h-full backface-hidden rounded-[20px] overflow-hidden shadow-2xl bg-[linear-gradient(135deg,#1565c0,#b71c1c)] flex flex-col items-center justify-center text-center p-5 box-border z-[2]">
            
            {/* Envelope Animation */}
            <div className="relative w-[80%] h-[60%] mb-5">
              {/* Envelope Top Flap */}
              <div className="absolute w-full h-1/2 top-0 bg-[#b71c1c] z-[2] origin-top transition-transform duration-500 group-hover:rotate-x-180 [clip-path:polygon(0_0,100%_0,50%_100%)]"></div>
              
              {/* Envelope Body */}
              <div className="absolute w-full h-full bg-[#e53935] rounded-lg flex items-center justify-center overflow-hidden">
                {/* Letter */}
                <div className="w-[80%] h-[75%] bg-white relative top-[5%] flex items-center justify-center text-[#1565c0] font-bold text-2xl shadow-md transition-transform duration-500 delay-200 group-hover:-translate-y-5">
                  Open me!
                </div>
              </div>
            </div>

            <h3 className="text-[#FFD700] text-4xl mb-4 drop-shadow-md font-bold capitalize">
              Thanksgiving Message
            </h3>
            <div className="text-white text-lg mt-5 animate-pulse-slow">
              Tap to open
            </div>
          </div>

          {/* Card Back */}
          <div className="absolute w-full h-full backface-hidden rounded-[20px] overflow-hidden shadow-2xl bg-white/95 rotate-y-180 p-8 box-border flex flex-col">
            <span 
              onClick={handleClose}
              className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-500 hover:text-[#b71c1c] transition-colors z-10"
            >
              ×
            </span>
            
            <div className="card-back-content overflow-y-auto flex-1 pr-2">
              <p className="text-[#333] text-[1.02em] leading-relaxed whitespace-pre-line">
                Good morning, ma’am.
                {'\n\n'}
                I thought of writing this on paper and giving it to you, but I didn’t have the guts.
                {'\n\n'}
                I was a bit nervous and didn’t know how you would take it....so here u go digital letter😇
                {'\n\n'}
                1st of all, thank you so much, ma’am, for your teachings and blessings.
                You were one of the most different teachers I met in this college. You were not just teaching the academic syllabus, but also sharing your life stories and lessons.😇
                {'\n\n'}
                Also, for our benefit, you brought Professor Dr. Sukumaran and conducted like a mini workshop.
                It really opened my mind about patents.
                I used to think patents were hard before, but that session made a huge difference.
                {'\n\n'}
                Your way of teaching was also different — you used to take 3–5 questions of same topic and solve them step by step, slowly, making sure everyone understood the concept.
                {'\n\n'}
                At first, I thought you would be strict since Control Systems was a hard subject, and I already had 4 backlogs. I was also going through family problems and depression at that time, and I didn’t know how to approach you or how you would react.😢
                {'\n\n'}
                But you were calm, you guided me, gave me tips to study well, and even consoled me. Thank you for everything, ma’am.
                {'\n\n'}
                I will never forget you — your teachings and the kind of person you are. You are a great human being. I hope you live a long and healthy life.
                This is my first time writing a thanksgiving letter, so I don’t really know what all to write…
                so if there are any errors, please excuse me, ma’am.😇
                {'\n'}
                Wishing you a very happy Thanksgiving!🦃🍁
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;