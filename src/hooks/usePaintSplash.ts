import { useEffect } from 'react';

export const usePaintSplash = () => {
  useEffect(() => {
    let isMouseDown = false;
    let paintInterval: NodeJS.Timeout | null = null;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // Body'ye paint-enabled class ekle
    document.body.classList.add('paint-enabled');
    
    // Cursor dot oluştur (sadece desktop)
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    // Mouse hareket takibi
    const updateCursorPosition = (e: MouseEvent) => {
      cursorDot.style.left = `${e.clientX - 6}px`;
      cursorDot.style.top = `${e.clientY - 6}px`;
    };

    const createSplash = (e: { clientX: number; clientY: number }) => {
      const splash = document.createElement('div');
      splash.className = 'paint-splash';
      splash.style.left = `${e.clientX - 10}px`;
      splash.style.top = `${e.clientY - 10}px`;
      
      // Rastgele varyasyon ekle
      const randomRotation = Math.random() * 360;
      const randomScale = 0.8 + Math.random() * 0.4;
      splash.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
      
      document.body.appendChild(splash);
      
      setTimeout(() => {
        if (splash.parentNode) {
          splash.parentNode.removeChild(splash);
        }
      }, 1500);
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isMouseDown = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      createSplash({ clientX, clientY });
      
      paintInterval = setInterval(() => {
        if (isMouseDown) {
          createSplash({ clientX: lastMouseX, clientY: lastMouseY });
        }
      }, 100);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      if (!('touches' in e)) {
        updateCursorPosition(e as MouseEvent);
      }
      
      lastMouseX = clientX;
      lastMouseY = clientY;
      if (isMouseDown) {
        createSplash({ clientX, clientY });
      }
    };

    const handleEnd = () => {
      isMouseDown = false;
      if (paintInterval) {
        clearInterval(paintInterval);
        paintInterval = null;
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleStart);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('mouseleave', handleEnd);
    document.addEventListener('mousemove', handleMove);
    
    // Touch events (passive to avoid console errors)
    document.addEventListener('touchstart', handleStart, { passive: true });
    document.addEventListener('touchmove', handleMove, { passive: true });
    document.addEventListener('touchend', handleEnd, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleStart);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('mouseleave', handleEnd);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchstart', handleStart);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
      if (paintInterval) {
        clearInterval(paintInterval);
      }
      // Body'den paint-enabled class kaldır
      document.body.classList.remove('paint-enabled');
      if (cursorDot.parentNode) {
        cursorDot.parentNode.removeChild(cursorDot);
      }
    };
  }, []);
};