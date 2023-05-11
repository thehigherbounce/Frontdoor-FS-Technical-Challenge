# Frontdoor FS Technical Challenge

<aside>
🚀 **Ready, set, code! 🚀**

The challenge is to improve Frontdoor's Chrome extension. Use the OpenAI API to help users find key info from articles or web pages. Build a Chrome extension with React, NestJS, and TypeScript, allowing users to highlight text and receive AI-generated summaries. 📚💡

By tackling this challenge, you'll test your React and TypeScript skills with captivating components and features while also showing off your skills to increase your chance of joining the team and helping build the future of the internet! 💼🚀 

Happy coding, and good luck! 😃👩‍💻👨‍💻🥳

</aside>

### **Requirements:**

1. **Chrome extension:** Create a Chrome extension with a popup that includes a button to enable/disable the feature and a list of summaries generated so far.
2. **React components:** Create reusable React components for the popup, highlights list, and summary tooltip. The highlights list should be sortable and filterable by date and tags.
3. **State management:** Use React hooks and context API to manage the application state. Ensure that the state is properly typed using TypeScript.
4. **TypeScript:** Strictly use TypeScript throughout the project and ensure proper typing for all components and functions.
5. **Highlight functionality:** When the feature is enabled, allow users to highlight text on a webpage by selecting it with their mouse. When a user clicks on a highlight, show the summary in the tooltip along with the tags associated with that highlight.
6. **API integration:** Integrate the OpenAI API to process the highlighted text and generate a brief summary. Ensure that the API calls are properly handled in the backend.
7. **Display the summary:** Show the summary in a tooltip when the user hovers over the highlighted text using a custom React component. Ensure that the tooltip is properly positioned and styled.
8. **Backend:** Implement a NestJS backend that will handle the API calls to OpenAI and any necessary processing. The backend should be properly tested using Jest and Supertest.
9. **Data persistence:** Store the user's highlights and summaries using MongoDB. Ensure that the data models are properly typed and that the database calls are properly handled.
10. **Testing:** Write unit tests for your code to ensure the proper functionality of the Chrome extension, with a focus on testing React components and TypeScript typings. Write integration tests for the backend using Jest and Supertest.

### **Stretch Goals (Optional):**

1. **User authentication:** Implement a user authentication system using React components and context API, allowing users to access their saved highlights and summaries across devices. Use JWT tokens for authentication and implement refresh tokens for security.
2. **Tagging system:** Allow users to categorize their highlights with tags for easier organization and retrieval. Use React components to display and manage tags. Implement a tag autocomplete feature for improved usability.
3. **Export functionality:** Enable users to export their highlights and summaries as a PDF, CSV, or other formats using a dedicated React component. Ensure the export feature is properly tested and handles large amounts of data.

### **Evaluation Criteria:**

- Code quality, readability, and organization, with a focus on React and TypeScript
- Proper use of React, NestJS, and TypeScript, including typing, hooks, and context API
- Effective integration with OpenAI API and MongoDB
- Responsive and user-friendly design of the Chrome extension
- Completeness of the solution and extra features implemented
- Proper testing of the Frontend and Backend, including unit tests and integration tests

### **Submission:**

> Send an email to **founders@frontdoor.xyz,** and ****please include the following:
> 
1. A GitHub repository containing the full source code of your solution, including unit tests and any necessary documentation. Include a README file with instructions on how to set up and run the Chrome extension. 
2. A brief video (under 5 minutes) of your screen demonstrating your implementation process and showing the product in action. In the video, we would appreciate it if you could:
    1. Explain your approach to implementing each part of the technical task.
    2. Specify which parts you were able to implement successfully and which parts you couldn't, along with the reasons why.
    3. Discuss the challenges you encountered during the implementation and the steps you took to overcome them.
    4. Highlight any potential limitations, areas for improvement, or additional considerations you'd like to address.

<aside>
💡 If you're a senior full-stack engineer, you'll likely ace this challenge in a day or two. Junior engineers, we anticipate it'll take you 2-3 days. Regardless of your experience, we're setting a swift deadline of 5 full working days from when the challenge is sent. And guess what? 
Following a successful technical challenge, we'll immediately schedule the final interview with the team. If everything aligns, we aim to extend an offer within a week after that. 🎉

Best of luck! 😊👩‍💻👨‍💻
Frontdoor Team

</aside>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
