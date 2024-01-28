import React, { useState, useEffect } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import backToTopcss from "../css/backToTap.css";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`back-to-top ${showButton ? 'visible' : 'hidden'}`} onClick={topFunction}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;