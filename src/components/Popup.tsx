import React, { useState, useEffect } from "react";
import HighlightsList from "./HighlightList";
import { apiRequest } from '../utils/api';
import PDFExport from './PDFExport';
import EnableToggle from "./EnableToggle";
import Highlight from "./Highlight";
import { HighlightContext } from '../contexts/HighlightContext';
import Tooltip from "./Tooltip";
import ShadowCounter from "./ShadowCounter";
import "../style.css";

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
        // const handleMessage = (message: any) => {
        //     if(message.type == '') {
        //         console.log(message)
        //     }
        // }
        // chrome.runtime.onMessage.addListener(handleMessage);
        // return () => {
        //     chrome.runtime.onMessage.removeListener(handleMessage);
        // }
    }, []);
    return (
        <div className="p-4 bg-white text-gray-800">
            <EnableToggle isEnabled={isEnabled} toggleEnabled={toggleEnabled} />
            <div className="clip-button"></div>
            {isEnabled && <>
                <HighlightsList
                    onRemoveHighlight={removeHighlight}
                    onUpdateHighlight={updateHighlight}
                />
                <PDFExport highlights={highlights} />
            </>}
        </div>
    )
}
export default Popup;