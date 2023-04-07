import React, { createContext, useState, useEffect } from 'react';
import { apiRequest } from '../utils/api';
import { Highlight, HighlightContextProps, HightlightContextState } from '../types/hightlight';

const initialState: HightlightContextState = {
  highlights: [],
  addHighlight: () => {},
  removeHighlight: () => {},
  updateHighlight: () => {},
};

const HighlightContext = createContext<HightlightContextState>(initialState);

const HighlightProvider: React.FC<HighlightContextProps> = ({ children }) => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  const addHighlight = (highlight: Highlight) => {
    setHighlights((prevHighlights) => [...prevHighlights, highlight]);
  };

  const removeHighlight = (id: string) => {
    setHighlights((prevHighlights) => prevHighlights.filter((h) => h.id !== id));
  };

  const updateHighlight = (updatedHighlight: Highlight) => {
    setHighlights((prevHighlights) =>
      prevHighlights.map((h) => (h.id === updatedHighlight.id ? updatedHighlight : h))
    );
  };
  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await apiRequest('/highlights');
        setHighlights(response);
      } catch (error) {
        console.error('Failed to fetch highlights:', error);
      }
    };
    fetchHighlights();
  }, []);

  // const addHighlight:any = async (text: string, summary: string, url: string) => {
  //   try {
  //     const newHighlight:any = await storeHighlight(text, summary, url);
  //     setHighlights((prevHighlights: Highlight[]) => [...prevHighlights, newHighlight]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const contextValue: HighlightContextData = { highlights, addHighlight,fetchHighlights };

  return (
    <HighlightContext.Provider value={{highlights, addHighlight, removeHighlight, updateHighlight}}>
      {children}
    </HighlightContext.Provider>
  );
};

export { HighlightContext, HighlightProvider };
