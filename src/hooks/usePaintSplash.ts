import { useEffect } from 'react';

export const usePaintSplash = () => {
  useEffect(() => {
    let isMouseDown = false;
    let paintInterval: NodeJS.Timeout | null = null;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // Cursor dot oluştur
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    // Mouse hareket takibi
    const updateCursorPosition = (e: MouseEvent) => {
      cursorDot.style.left = `${e.clientX - 6}px`;
      cursorDot.style.top = `${e.clientY - 6}px`;
    };

    const createSplash = (e: MouseEvent) => {
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
      }, 2500);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      createSplash(e);
      
      document.addEventListener('mousemove', handleMouseMove);
      
      paintInterval = setInterval(() => {
        if (isMouseDown) {
          const mouseEvent = new MouseEvent('mousemove', {
            clientX: lastMouseX,
            clientY: lastMouseY
          });
          createSplash(mouseEvent);
        }
      }, 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e);
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      if (isMouseDown) {
        createSplash(e);
      }
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      if (paintInterval) {
        clearInterval(paintInterval);
        paintInterval = null;
      }
      document.removeEventListener('mousemove', handleMouseMove);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      if (paintInterval) {
        clearInterval(paintInterval);
      }
      if (cursorDot.parentNode) {
        cursorDot.parentNode.removeChild(cursorDot);
      }
    };
  }, []);
};