import React, { useState, useEffect } from "react";
import HighlightsList1 from "./HighlightList1";
import { apiRequest } from '../utils/api';
import PDFExport from './PDFExport';
import EnableToggle from "./EnableToggle";
import { HighlightContext } from '../contexts/HighlightContext';


const Popup: React.FC = () => {
    const [isEnabled, setIsEnabled] = useState<boolean>(true);
    const { highlights, removeHighlight, updateHighlight } = React.useContext(
        HighlightContext
    );
    const fetchEnabledState = async () => {
        try {
            const response = await apiRequest('/settings/enabled');
            setIsEnabled(response.enabled);
        } catch (error) {
            console.error('Failed to fetch enabled state:', error);
        }
    };
    const summarize = async () => {
        try {
            const response = await apiRequest('/openai');
            console.log(response)
        } catch (error) {
            console.error('Failed to fetch enabled state:', error);
        }
    }
    const toggleEnabled = async () => {
        try {
            const response = await apiRequest('/settings/toggle', 'PUT');
            setIsEnabled(response.enabled);
        } catch (error) {
            console.error('Failed to toggle enabled state:', error);
        }
    };
    
    useEffect(() => {
        fetchEnabledState(); // Get enable status
        summarize();
        // const handleMessage = (message: any) => {
        //     if(message.selectedText) {
        //         console.log("handleMessage");
        //     }
        // }
        // chrome.runtime.onMessage.addListener(handleMessage);
        // return () => {
        //     chrome.runtime.onMessage.removeListener(handleMessage);
        // }
    }, []);

    return (
        <div className="p-4 bg-white text-gray-800">
            <h1 className="text-xl font-bold">Frontdoor Chrome Extension</h1>
            <EnableToggle isEnabled={isEnabled} toggleEnabled={toggleEnabled} />
            <HighlightsList1
                onRemoveHighlight={removeHighlight}
                onUpdateHighlight={updateHighlight}
            />
            <PDFExport highlights={highlights} />
        </div>
    )
}
export default Popup;