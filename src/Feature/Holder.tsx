"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import P4 from "./P4";
import P5 from "./P5";
import P6 from "./P6";

type PageNumber = 1 | 2 | 3 | 4 | 5 | 6;

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default function Holder() {
  const [activePage, setActivePage] = useState<PageNumber>(1);
  const [scrollDirection, setScrollDirection] = useState<number>(0);
  const debouncedScrollDirection = useDebounce(scrollDirection, 100);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setScrollDirection(e.deltaY);
  }, []);

  useEffect(() => {
    if (debouncedScrollDirection > 0 && activePage < 6) {
      setActivePage((prev) => (prev < 6 ? ((prev + 1) as PageNumber) : prev));
      setScrollDirection(0);
    } else if (debouncedScrollDirection < 0 && activePage > 1) {
      setActivePage((prev) => (prev > 1 ? ((prev - 1) as PageNumber) : prev));
      setScrollDirection(0); 
    }
  }, [debouncedScrollDirection]);

  const pages: Record<PageNumber, JSX.Element> = {
    1: <P1 />,
    2: <P2 />,
    3: <P3 />,
    4: <P4 />,
    5: <P5 />,
    6: <P6 />,
  };

  const variants = {
    enter: { opacity: 0, y: 100 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <div
      onWheel={handleWheel}
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
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
          {pages[activePage]}
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
}