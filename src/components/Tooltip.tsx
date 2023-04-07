import React from "react";

interface TooltipProps {
    summary: string;
}

const Tooltip: React.FC<TooltipProps> = ({ summary }) => {
    return (
        <div className="bg-white text-black px-4 py-2 rounded shadow-lg border border-gray-200">
            {summary}
        </div>
    )
}
export default Tooltip;