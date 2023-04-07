import { sendMessageToBackground } from './utils/messaging';

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message from background:', message);

  // You can perform actions based on the received message here.
  // For example, if the message contains a command, you can execute the command.
  if (message.command === 'exampleCommand') {
    console.log('Executing example command.');
  }

  // Send a response back to the background script if necessary
  sendResponse({ success: true });
});

// You can also send messages to the background script
(async () => {
  try {
    const response = await sendMessageToBackground({ command: 'exampleCommand' });
    console.log('Received response from background:', response);
  } catch (error) {
    console.error('Failed to send message to background:', error);
  }
})();
