import React, { useRef, useEffect } from 'react';
import { SummaryTooltipProps } from '../types/summary';

const SummaryTooltip: React.FC<SummaryTooltipProps> = ({ summary, targetRef, x, y }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTooltip = () => {
      const tooltip = tooltipRef.current;
      const target = targetRef.current;
      if (!tooltip || !target) return;

      const rect = target.getBoundingClientRect();
      tooltip.style.top = `${y ? y - 5 : (rect.top + window.scrollY - tooltip.offsetHeight - 5)}px`;
      tooltip.style.left = `${x ? x : (rect.left + window.scrollX)}px`;
      tooltip.classList.remove("hidden");
    };

    const hideTooltip = () => {
      const tooltip = tooltipRef.current;
      if (!tooltip) return;
      tooltip.classList.add("hidden");
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
      className="frontdoor-tooltip fixed bg-gray-800 text-white p-2 rounded-md text-sm z-50 hidden"
      style={{ maxWidth: '300px' }}
    >
      {summary}
    </div>
  );
};
export default SummaryTooltip;