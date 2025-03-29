"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import P4 from "./P4";
import P5 from "./P5";
import P6 from "./P6";

type PageNumber = 1 | 2 | 3 | 4 | 5 | 6;

export default function Holder() {
  const [activePage, setActivePage] = useState<PageNumber>(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const lastTransitionTime = useRef<number>(0);
  
  // حداقل فاصله برای تشخیص سوایپ (به پیکسل)
  const minSwipeDistance = 70;
  // زمان حداقل بین انتقال‌ها (میلی‌ثانیه)
  const transitionCooldown = 500;

  const goToNextPage = useCallback(() => {
    const now = Date.now();
    if (now - lastTransitionTime.current < transitionCooldown) return;
    
    setActivePage((prev) => {
      if (prev < 6) {
        lastTransitionTime.current = now;
        return (prev + 1) as PageNumber;
      }
      return prev;
    });
  }, []);

  const goToPrevPage = useCallback(() => {
    const now = Date.now();
    if (now - lastTransitionTime.current < transitionCooldown) return;
    
    setActivePage((prev) => {
      if (prev > 1) {
        lastTransitionTime.current = now;
        return (prev - 1) as PageNumber;
      }
      return prev;
    });
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const content = contentRef.current;
    if (!content) return;

    const isAtTop = content.scrollTop <= 5;
    const isAtBottom =
      content.scrollHeight - content.scrollTop - content.clientHeight <= 5;

    // اگر اسکرول به سمت پایین و به آخر محتوا رسیده، صفحه بعدی
    if (e.deltaY > 0 && isAtBottom) {
      goToNextPage();
    }
    // اگر اسکرول به سمت بالا و به اول محتوا رسیده، صفحه قبلی
    else if (e.deltaY < 0 && isAtTop) {
      goToPrevPage();
    }
  }, [goToNextPage, goToPrevPage]);

  // مدیریت شروع لمس
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.touches[0].clientY;
    touchEndRef.current = null;
  };

  // مدیریت پایان لمس
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) return;
    
    // آخرین موقعیت لمس را ذخیره می‌کنیم
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
        // سوایپ به بالا (حرکت انگشت به بالا - مقدار مثبت)
        if (distance > 0 && isAtBottom) {
          goToNextPage();
        } 
        // سوایپ به پایین (حرکت انگشت به پایین - مقدار منفی)
        else if (distance < 0 && isAtTop) {
          goToPrevPage();
        }
      }
    }
    
    // ریست کردن مقادیر لمس
    touchStartRef.current = null;
  };

  // const MobileNavigationButtons = () => (
  //   <div className="mobile-navigation" style={{
  //     position: 'fixed',
  //     bottom: '20px',
  //     left: '50%',
  //     transform: 'translateX(-50%)',
  //     display: 'flex',
  //     gap: '20px',
  //     zIndex: 1000,
  //   }}>
  //     <button 
  //       onClick={goToPrevPage}
  //       disabled={activePage === 1}
  //       style={{
  //         width: '50px',
  //         height: '50px',
  //         borderRadius: '50%',
  //         backgroundColor: activePage === 1 ? '#ccc' : '#333',
  //         color: 'white',
  //         border: 'none',
  //         fontSize: '20px',
  //         cursor: activePage === 1 ? 'default' : 'pointer',
  //       }}
  //     >
  //       ↑
  //     </button>
  //     <button 
  //       onClick={goToNextPage}
  //       disabled={activePage === 6}
  //       style={{
  //         width: '50px',
  //         height: '50px',
  //         borderRadius: '50%',
  //         backgroundColor: activePage === 6 ? '#ccc' : '#333',
  //         color: 'white',
  //         border: 'none',
  //         fontSize: '20px',
  //         cursor: activePage === 6 ? 'default' : 'pointer',
  //       }}
  //     >
  //       ↓
  //     </button>
  //   </div>
  // );

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
      
      {/* دکمه‌های نویگیشن برای موبایل
      <MobileNavigationButtons /> */}
    </div>
  );
}