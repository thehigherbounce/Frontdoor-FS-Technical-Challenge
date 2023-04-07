import React from "react";
import TagInput from "./TagInput";
import { HighlightContext } from "../contexts/HighlightContext";
import Summary from "./Summary";
import HighlightItem from "./HighlightItem";
// import { addTagToHighlight, fetchHighlights } from '../utils/api';

interface HighlightListProps {
    onRemoveHighlight: (id: string) => void;
    onUpdateHighlight: (highlight: {
        id: string;
        text: string;
        summary: string;
        tags: string[];
    }) => void;
}

const HighlightsList1: React.FC<HighlightListProps> = ({ onRemoveHighlight, onUpdateHighlight }) => {
    const { highlights } = React.useContext(HighlightContext);

    return (
        <div className="mt-4">
            {highlights.map((highlight, index:number) => (
                <HighlightItem highlight={highlight}>
                    <Summary key={index} text={highlight.text} summary={highlight.summary} />
                    <button
                        onClick={() => onRemoveHighlight(highlight.id)}
                        className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
                    >
                        Remove
                    </button>
                    <TagInput
                        tags={highlight.tags}
                        onAddTag={(tag) => {
                            onUpdateHighlight({
                                ...highlight,
                                tags: [...highlight.tags, tag],
                            });
                        }}
                        onRemoveTag={(tagIndex) => {
                            onUpdateHighlight({
                                ...highlight,
                                tags: highlight.tags.filter((_, index) => index !== tagIndex),
                            });
                        }}
                    />
                </HighlightItem>
            ))}
        </div>
    )
}
export default HighlightsList1;