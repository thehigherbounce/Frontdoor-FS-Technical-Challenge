import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFExportProps {
    highlights: Array<{
        id: string;
        text: string;
        summary: string;
        tags: string[];
    }>;
}

const PDFExport: React.FC<PDFExportProps> = ({ highlights }) => {
    const exportRef = useRef<HTMLDivElement>(null);

    const exportToPDF = async () => {
        if (!exportRef.current) return;
        const canvas = await html2canvas(exportRef.current);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0, 100, 100);
        pdf.save('highlighs.pdf');
    };

    return (
        <div>
            <button
                onClick={exportToPDF}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Export to PDF
            </button>
            <div ref={exportRef} className="hidden">
                {highlights.map((highlight) => (
                    <div key={highlight.id}>
                        <h3>{highlight.text}</h3>
                        <p>{highlight.summary}</p>
                        <p>Tags: {highlight.tags.join(', ')}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PDFExport;