import { ChromeMessage, Request } from "../types/content";
import { apiRequest } from "../utils/api";
export {}

type MessageResponse = (response?: any) => void

chrome.runtime.onInstalled.addListener((details) => {
    console.log("[background.ts] onInstalled", details);
});

chrome.runtime.onConnect.addListener((port) => {
    console.assert(port.name === 'content');
    port.onMessage.addListener(async (
        request: Request
    ) => {
        console.log('Received message from content script:', request);
        // You can perform actions based on the received message here.
        // For example, if the message contains a command, you can execute the command.
        try {
            let summary:any;
            if (request.command === 'HIGHLIGHT_DETECTED') {
                // send request to openai api to get summary
                const response = await apiRequest('/openai/summary', 'POST', { 'text': request.selection });
                console.log(response)
                summary = response.summary;
            }
            console.log(summary)
            // Send a response back to the summarycontent script if necessary
            port.postMessage({ success: true, summary });
        } catch (err) {
            port.postMessage({ success: false })
        }
    })
});

chrome.runtime.onSuspend.addListener(() => {
    console.log("[background.ts] onSuspend");
});