import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Start at 50% for balanced reveal
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  // Auto-hide instruction hint after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInteracted(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    // Clamp between 0% and 100% for full transition
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    
    // Use RAF for smooth updates
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    
    animationFrameId.current = requestAnimationFrame(() => {
      setSliderPosition(clampedPercentage);
    });
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!hasInteracted) setHasInteracted(true);
    updatePosition(clientX);
  }, [hasInteracted, updatePosition]);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    setIsDraggingState(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    setIsDraggingState(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  }, [handleMove]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault(); // Prevent scrolling/zooming
    isDragging.current = true;
    setIsDraggingState(true);
    if (!hasInteracted) setHasInteracted(true);
    
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [hasInteracted, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault(); // Prevent scrolling/zooming
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = false;
    setIsDraggingState(false);
  }, []);

  // Tap anywhere to jump to position
  const handleContainerClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging.current) return; // Don't jump if dragging
    
    const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
    if (clientX) {
      handleMove(clientX);
    }
  }, [handleMove]);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[min(28rem,calc(100vw-2rem))] mx-auto h-[440px] sm:h-[500px] md:h-[540px] overflow-hidden rounded-2xl select-none touch-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleContainerClick}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* AFTER State (Background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 border-b border-gray-800">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary to-rosegold flex-shrink-0"></div>
            <div>
              <div className="font-semibold text-white text-sm">Priya ✨</div>
              <div className="text-[10px] text-green-400">Active now</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2.5 sm:p-3 space-y-2 overflow-y-auto">
            {/* Her message */}
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[70%] text-xs sm:text-sm">
                Hey! How's your day going?
              </div>
            </div>

            {/* Your engaging response */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-primary to-pink-600 text-white px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[70%] text-xs sm:text-sm">
                Just wrapped up a crazy brainstorming session! My team thinks I'm insane for pitching a midnight food truck idea 😂 You into spontaneous adventures?
              </div>
            </div>

            {/* Her interested response */}
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[70%] text-xs sm:text-sm">
                Haha that actually sounds amazing! I'm always down for random food adventures 🌮
              </div>
            </div>

            {/* Your date proposal */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-primary to-pink-600 text-white px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[70%] text-xs sm:text-sm">
                Say less! There's this legendary late-night biryani spot near Linking Road. Saturday around 8?
              </div>
            </div>

            {/* Her acceptance */}
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[70%] text-xs sm:text-sm">
                You had me at biryani 😍 Saturday it is!
              </div>
            </div>

            {/* Success indicator */}
            <div className="flex justify-center pt-1.5">
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                ✓ Date Confirmed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BEFORE State (Foreground with clip-path) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 border-b border-gray-800">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-700 flex-shrink-0"></div>
            <div>
              <div className="font-semibold text-white text-sm">Priya</div>
              <div className="text-[10px] text-gray-500">Active 2h ago</div>
            </div>
          </div>

          {/* Boring Messages */}
          <div className="flex-1 p-2.5 sm:p-3 space-y-2 overflow-y-auto">
            {/* Her message */}
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[70%] text-xs sm:text-sm">
                Hey! How's your day going?
              </div>
            </div>

            {/* Your boring response */}
            <div className="flex justify-end">
              <div className="bg-gray-700 text-gray-300 px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[70%] text-xs sm:text-sm">
                Good, how about you?
              </div>
            </div>

            {/* Her attempt to engage */}
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[70%] text-xs sm:text-sm">
                Pretty good! Just got back from a fun workout
              </div>
            </div>

            {/* Your generic response */}
            <div className="flex justify-end">
              <div className="bg-gray-700 text-gray-300 px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[70%] text-xs sm:text-sm">
                That's nice
              </div>
            </div>

            {/* Seen indicator */}
            <div className="flex justify-end pt-2.5">
              <div className="text-gray-600 text-[10px] sm:text-xs font-semibold seen-glow">
                SEEN 8:45 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-white/90 pointer-events-none z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-white/60 blur-[2px]"></div>
      </div>

      {/* Draggable Handle - Minimal Vertical Pill */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[6px] h-11 bg-white/80 backdrop-blur-sm rounded-full shadow-lg z-20 flex flex-col items-center justify-center gap-1 touch-none"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleMouseDown();
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          handleTouchStart(e);
        }}
        animate={{
          scale: isDraggingState ? 1.1 : 1,
          opacity: isDraggingState ? 1 : 0.85,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        whileHover={{ opacity: 1 }}
      >
        {/* Three-dot grip pattern */}
        <div className="w-1 h-1 rounded-full bg-gray-800/50"></div>
        <div className="w-1 h-1 rounded-full bg-gray-800/50"></div>
        <div className="w-1 h-1 rounded-full bg-gray-800/50"></div>

        {/* Pulse animation hint (only shows initially) */}
        {!hasInteracted && (
          <motion.div
            className="absolute inset-0 rounded-full bg-white/40 pointer-events-none"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
          />
        )}
      </motion.div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <motion.div 
          className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold"
          animate={{
            opacity: sliderPosition > 5 ? 1 : 0.3,
          }}
        >
          BEFORE
        </motion.div>
      </div>

      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <motion.div 
          className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold"
          animate={{
            opacity: sliderPosition < 95 ? 1 : 0.3,
          }}
        >
          AFTER
        </motion.div>
      </div>

      {/* Instruction hint (fades out after interaction) */}
      {!hasInteracted && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold z-20 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1],
            y: 0,
          }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          👆 Drag or tap to compare
        </motion.div>
      )}
    </div>
  );
};

export { BeforeAfterSlider };
export default BeforeAfterSlider;
