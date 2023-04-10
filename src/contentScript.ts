chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message from background:', message);

  // You can perform actions based on the received message here.
  // For example, if the message contains a command, you can execute the command.
  if (message.command === 'exampleCommand') {
    console.log('Executing example command.');
  }
  console.log('this is test')
  // Send a response back to the background script if necessary
  sendResponse({ success: true });
});
export {}