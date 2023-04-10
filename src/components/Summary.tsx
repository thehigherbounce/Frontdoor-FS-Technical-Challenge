import React, { useRef } from 'react';
import SummaryTooltip from './SummaryTooltip';

type SummaryProps = {
  summary: string;
  text: string;
};

const Summary: React.FC<SummaryProps> = ({ summary, text }) => {
  const targetRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      <span ref={targetRef} className="frontdoor-highlighted-text text-rose-500	">
        {text}
      </span>
      <SummaryTooltip summary={summary} targetRef={targetRef} x={null} y={null} />
    </>
  );
};

export default Summary;
