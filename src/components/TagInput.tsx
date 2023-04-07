import React, { useState } from "react";

interface TagInputProps {
    tags: string[];
    onAddTag: (tag: string) => void;
    onRemoveTag: (tagIndex: number) => void;
}

const TagInput: React.FC<TagInputProps> = ({ tags, onAddTag, onRemoveTag }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleAddTag = () => {
        if (inputValue.trim() !== '' && !tags.includes(inputValue)) {
            onAddTag(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="flex flex-wrap items-center">
            {tags.map((tag, index) => (
                <div key={index} className="bg-blue-500 text-white px-2 py-1 mr-2 mb-2 rounded">
                    {tag}
                    <button
                        onClick={() => onRemoveTag(index)}
                        className="text-white ml-1 font-bold"
                    >
                        &times;
                    </button>
                </div>
            ))}
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                className="border border-gray-300 px-2 py-1 rounded"
                placeholder="Add tag"
            />
            <button
                onClick={handleAddTag}
                className="bg-green-500 text-white px-2 py-1 ml-2 rounded"
            >
                Add
            </button>
        </div>
    )
}
export default TagInput;