import { useEffect, useState } from 'react';
import './ScrollToTop.css';
import { HiArrowSmUp } from 'react-icons/hi';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTopClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <div className="toTop-container" onClick={scrollToTopClickHandler}>
        <HiArrowSmUp className="up-icon" />
      </div>
    )
  );
};

export default ScrollToTop;
