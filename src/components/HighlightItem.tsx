import React from 'react';
import { Highlight } from '@src/types/hightlight';

interface HighlightItemProps {
  highlight: Highlight;
  children: React.ReactNode;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ highlight, children }) => {
  return (
    <div key={highlight.id} className="mb-4">
      {children}
    </div>
  );
};

export default HighlightItem;