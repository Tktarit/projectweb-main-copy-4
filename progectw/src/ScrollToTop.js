import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // เลื่อนหน้ากลับไปที่ตำแหน่ง (0, 0)
  }, [pathname]); // ทำงานทุกครั้งที่ pathname เปลี่ยนแปลง

  return null;
};

export default ScrollToTop;
