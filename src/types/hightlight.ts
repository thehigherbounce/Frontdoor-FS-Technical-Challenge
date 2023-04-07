import React from "react";

export interface Highlight {
    id: string;
    text: string;
    summary: string;
    tags: string[];
}

export interface HightlightContextState {
    highlights: Highlight[];
    addHighlight: (highlight: Highlight) => void;
    removeHighlight: (id: string) => void;
    updateHighlight: (highlight: Highlight) => void;
}

export interface HighlightContextValue {
    highlights: Highlight[];
    addHighlight: (highlight: Highlight) => void;
}
export interface HighlightProps {
    id: string;
    summary: string;
}
export interface HighlightContextData {
    highlights: Highlight[];
    addHighlight: () => void;
    fetchHighlights: () => void;
}
export interface HighlightContextProps {
    children: React.ReactNode
}
export interface HighlightListProps {
    highlights: Highlight[];
    setHighlights: (highlights: Highlight[]) => void;
}