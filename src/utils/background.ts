// src/background.ts
import { apiRequest } from './api';

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.selectedText) {
    try {
      const response = await apiRequest('/summarize', 'POST', {
        text: message.selectedText,
      });
      sendResponse({ summary: response.summary });
    } catch (error) {
      console.error('Error generating summary:', error);
      sendResponse({ error: 'Failed to generate summary.' });
    }
  }
  return true; // Indicates that the response will be sent asynchronously
});
