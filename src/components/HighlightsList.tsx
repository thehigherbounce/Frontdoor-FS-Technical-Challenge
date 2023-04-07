import React from 'react';
// import { useHighlight } from '../contexts/HighlightContext';
import HighlightItem from './HighlightItem';

const HighlightsList: React.FC = () => {
  // const { highlights } = useHighlight();

  return (
    <ul>
      {/* {highlights.map((highlight, index) => (
        <HighlightItem key={index} text={highlight.text} summary={highlight.summary} />
      ))} */}
    </ul>
  );
};

export default HighlightsList;
