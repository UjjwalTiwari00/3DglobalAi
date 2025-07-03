// import React from 'react';

// const PriceHighlight = ({ children }) => {
//   return (
//     <div className="relative inline-block font-['Libre_Franklin'] text-[32px] font-medium">
//       <span>{children}</span>
//       {/* Before pseudo-element */}
//       <div className="absolute -left-2 -top-1 w-[calc(100%+0.5em)] h-8 border-2 border-[#ef8c22] border-r-transparent rounded-full opacity-70 rotate-[2deg] z-[-1] p-[0.1em_0.25em]"></div>
//       {/* After pseudo-element */}
//       <div className="absolute -left-2 top-[0.1em] w-[calc(100%+0.5em)] h-8 border-2 border-[#ef8c22] border-l-transparent border-t-transparent rounded-full opacity-70 -rotate-[1deg] z-[-1] p-[0.1em_0.25em]"></div>
//     </div>
//   );
// };

// export default PriceHighlight;





import React from 'react';

const PriceHighlight = ({ children }) => {
  return (
    <div className="relative inline-block font-['Libre_Franklin'] font-medium">
      <span>{children}</span>
      {/* Before pseudo-element with animation */}
      <div className="absolute -left-2 -top-1 w-[calc(100%+0.5em)] h-8 border-3 border-[#ef8c22] border-r-transparent rounded-full opacity-70 rotate-[1deg] z-[-1] p-[1em_0.1rem] animate-draw-circle"></div>
      {/* After pseudo-element with animation */}
      <div className="absolute -left-2 top-[0.3em] w-[calc(100%+0.5em)] h-8 border-3 border-[#ef8c22] border-l-transparent border-t-transparent rounded-full opacity-70 -rotate-[3deg] z-[-1] p-[0.1em_1rem] animate-draw-circle"></div>
      <style jsx>{`
        @keyframes draw-circle {
          0% {
            border-color: transparent;
            opacity: 0;
            transform: rotate(0deg);
          }
          50% {
            border-color: #ef8c22 transparent transparent transparent;
            opacity: 0.3;
          }
          100% {
            border-color: #ef8c22;
            opacity: 0.9;
            transform: rotate(2deg);
          }
        }
        .animate-draw-circle {
          animation: draw-circle 0.9s ease-in-out forwards;
        }
        /* Adjust second circle's animation to match its unique border and rotation */
        div:last-child.animate-draw-circle {
          animation: draw-circle-second 0.11s ease-in-out forwards;
        }
        @keyframes draw-circle-second {
          0% {
            border-color: transparent;
            opacity: 0;
            transform: rotate(0deg);
          }
          50% {
            border-color: transparent transparent #ef8c22 transparent;
            opacity: 0.3;
          }
          100% {
            border-color: #ef8c22 transparent #ef8c22 transparent;
            opacity: 0.7;
            transform: rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PriceHighlight;