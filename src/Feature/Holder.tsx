"use client";
import React, { useState,  useCallback, useRef, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import P4 from "./P4";
import P5 from "./P5";

type PageNumber = 1 | 2 | 3 | 4 | 5;

export default function Holder() {
  const [activePage, setActivePage] = useState<PageNumber>(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const lastTransitionTime = useRef<number>(0);
  
  const minSwipeDistance = 70;
  const transitionCooldown = 500;

  const goToNextPage = useCallback(() => {
    const now = Date.now();
    if (now - lastTransitionTime.current < transitionCooldown) return;
    
    setActivePage((prev) => {
      lastTransitionTime.current = now;
      return prev === 5 ? 1 as PageNumber : (prev + 1) as PageNumber;
    });
  }, []);

  const goToPrevPage = useCallback(() => {
    const now = Date.now();
    if (now - lastTransitionTime.current < transitionCooldown) return;
    
    setActivePage((prev) => {
      lastTransitionTime.current = now;
      return prev === 1 ? 5 as PageNumber : (prev - 1) as PageNumber;
    });
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const content = contentRef.current;
    if (!content) return;

    const isAtTop = content.scrollTop <= 5;
    const isAtBottom =
      content.scrollHeight - content.scrollTop - content.clientHeight <= 5;

    if (e.deltaY > 0 && isAtBottom) {
      goToNextPage();
    }
    else if (e.deltaY < 0 && isAtTop) {
      goToPrevPage();
    }
  }, [goToNextPage, goToPrevPage]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.touches[0].clientY;
    touchEndRef.current = null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) return;
    
    touchEndRef.current = e.changedTouches[0].clientY;
    
    const content = contentRef.current;
    if (!content) return;

    const isAtTop = content.scrollTop <= 5;
    const isAtBottom =
      content.scrollHeight - content.scrollTop - content.clientHeight <= 5;
    
    if (touchStartRef.current && touchEndRef.current) {
      const distance = touchStartRef.current - touchEndRef.current;
      const isSignificantSwipe = Math.abs(distance) > minSwipeDistance;
      
      if (isSignificantSwipe) {
        if (distance > 0 && isAtBottom) {
          goToNextPage();
        } 
        else if (distance < 0 && isAtTop) {
          goToPrevPage();
        }
      }
    }
    
    touchStartRef.current = null;
  };

  const NavigationIndicators = () => (
    <div className="navigation-indicators" style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      zIndex: 1000,
    }}>
      {[1, 2, 3, 4, 5].map((page) => (
        <div 
          key={page}
          onClick={() => {
            const now = Date.now();
            if (now - lastTransitionTime.current < transitionCooldown) return;
            lastTransitionTime.current = now;
            setActivePage(page as PageNumber);
          }}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: activePage === page ? '#fff' : 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        />
      ))}
    </div>
  );

  const pages: Record<PageNumber, JSX.Element> = {
    1: <P1 />,
    2: <P2 />,
    3: <P3 />,
    4: <P4 />,
    5: <P5 />,
  };

  const variants = {
    enter: { opacity: 0, y: 100 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden", position: "relative" }}>
      <div
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ height: "100%", width: "100%" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ height: "100%", width: "100%" }}
          >
            <div
              ref={contentRef}
              style={{ height: "100%", width: "100%", overflowY: "auto" }}
            >
              {pages[activePage]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <NavigationIndicators />
    </div>
  );
}