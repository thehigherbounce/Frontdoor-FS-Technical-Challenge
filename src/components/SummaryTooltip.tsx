import React, { useRef, useEffect } from 'react';
import { SummaryTooltipProps } from '../types/summary';

const SummaryTooltip: React.FC<SummaryTooltipProps> = ({ summary, targetRef }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTooltip = () => {
      const tooltip = tooltipRef.current;
      const target = targetRef.current;
      if (!tooltip || !target) return;

      const rect = target.getBoundingClientRect();
      tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.visibility = 'visible';
    };

    const hideTooltip = () => {
      const tooltip = tooltipRef.current;
      if (!tooltip) return;
      tooltip.style.visibility = 'hidden';
    };

    const target = targetRef.current;
    if (target) {
      target.addEventListener('mouseenter', showTooltip);
      target.addEventListener('mouseleave', hideTooltip);
    }

    return () => {
      if (target) {
        target.removeEventListener('mouseenter', showTooltip);
        target.removeEventListener('mouseleave', hideTooltip);
      }
    };
  }, [targetRef]);

  return (
    <div
      ref={tooltipRef}
      className="frontdoor-tooltip absolute bg-gray-800 text-white p-2 rounded-md text-sm z-50 invisible"
      style={{ maxWidth: '300px' }}
    >
      {summary}
    </div>
  );
};
export default SummaryTooltip;