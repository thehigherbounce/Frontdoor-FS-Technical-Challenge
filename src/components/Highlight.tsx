import React,{useEffect} from 'react';
import { createPortal } from 'react-dom';
import { HighlightProps } from '../types/hightlight';

const Highlight: React.FC<HighlightProps> = ({ id, summary }) => {
  const highlightRef = React.useRef<HTMLSpanElement | null>(null);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  const onMouseEnter = () => {
    setTooltipVisible(true);
  };

  const onMouseLeave = () => {
    setTooltipVisible(false);
  };

  useEffect(() => {
    const highlightElement = document.getElementById(id);
    if (highlightElement) {
      highlightRef.current = highlightElement;
      highlightElement.addEventListener('mouseenter', onMouseEnter);
      highlightElement.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (highlightElement) {
        highlightElement.removeEventListener('mouseenter', onMouseEnter);
        highlightElement.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [id]);

  if (!highlightRef.current) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed top-0 left-0 p-2 bg-black text-white text-sm rounded ${
        tooltipVisible ? 'visible' : 'invisible'
      }`}
      style={{
        zIndex: 9999,
        transform: 'translate3d(0, -100%, 0)',
      }}
    >
      {summary}
    </div>,
    highlightRef.current
  );
};

export default Highlight;
