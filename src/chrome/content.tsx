import React from "react";
import ReactDom from "react-dom/client";
import SummaryTooltip from "../components/SummaryTooltip";
import { ChromeMessage, Sender } from "../types/content";
import "tailwindcss/tailwind.css";

type MessageResponse = (response?: any) => void

const validateSender = (message: ChromeMessage, sender: chrome.runtime.MessageSender) => {
    return sender.id == chrome.runtime.id && message.from === Sender.React;
}

const port = chrome.runtime.connect({ name: 'content' });

const messagesFromReactAppListener = (
    message: ChromeMessage,
    sender: chrome.runtime.MessageSender,
    response: MessageResponse
) => {
    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React &&
        message.message === 'Hello from React') {
        response('Hello from content.js');
    }
    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React &&
        message.message === "delete logo") {

        const logo = document.getElementById('hplogo');
        logo?.parentElement?.removeChild(logo);
    }
}
// Get Window selection event and sendRequest to background.js
const handleMouseup = async () => {
    const selectedText: any = window.getSelection()?.toString();
    if (selectedText !== '') {
        // Get x,y position of selectedText
        const selectionRect = window.getSelection()?.getRangeAt(0)?.getBoundingClientRect();
        if (selectionRect) {
            console.log(selectionRect.y, window.scrollY)
            const x = selectionRect.x + window.scrollX;
            const y = selectionRect.y + window.scrollY;
            console.log('handleSelectionx', selectedText, x, y);
            const response = await sendMessageToBackground({
                command: 'HIGHLIGHT_DETECTED',
                selection: selectedText,
            });
            if (response.success) {
                const summary = response.summary;
                const target = document.createElement("span");
                target.textContent = selectedText;
                target.className = 'text-purple-600'
                // make tooltip container in React component.
                const tooltipContainer = document.createElement("div");
                tooltipContainer.className = "inline-block";
                target.appendChild(tooltipContainer);
                try {
                    const range = window.getSelection()?.getRangeAt(0);
                    range?.deleteContents();
                    range?.insertNode(target);
                } catch (err) {
                    console.error("Error:", err);
                }

                const root = ReactDom.createRoot(
                    tooltipContainer
                );
                root.render(
                    <SummaryTooltip
                        summary={summary}
                        targetRef={{ current: target }}
                        x={x}
                        y={y}
                    />
                );
            } else {
                new Error("The Error is occured. Check Extension status");
            }
        }
    }
}
const sendMessageToBackground = (message: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        port.postMessage(message);
        port.onMessage.addListener((response) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        })
    })
};
(() => {
    // listen event from popup page
    chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
    // bind mouseup event for selection of text
    document.addEventListener('mouseup', handleMouseup);
})();