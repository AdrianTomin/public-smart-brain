
# Smart Brain Overview

Smart Brain is a web application whose main functionality revolves around utilizing the Clarifai API for general image recognition.

Built with: 

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
Next.js is the framework for building React applications, providing server-side rendering, and other features.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
TypeScript is for type-checking and adding static types to JavaScript code, enhancing development productivity, and code maintainability.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
React is for building the application's user interface components, providing a dynamic and responsive user experience.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
Node.js is for running the server-side application

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
Express.js is the backend framework that handles server-side logic and API requests.

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
MongoDB is the database to store and manage application data.

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
SCSS (Sass) is a CSS preprocessor to enhance styling capabilities and maintainability.

![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
Apollo GraphQL implements GraphQL on the server side, enabling efficient data fetching and management.

![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
MUI is for customizable prebuilt React components.

![Cypress](https://img.shields.io/badge/Cypress-%234ea94b.svg?style=for-the-badge&logo=cypress&logoColor=white)
Cypress is for end-to-end application testing, ensuring its functionality across different scenarios.



## Features

- The main functionality of this project is centred around utilizing the Clarifai API for general image recognition. Users can upload images, and the application uses the Clarifai API to analyze and recognize the contents of the images, providing relevant information or insights.
- CRUD accessibility to all user accounts.




## Screenshots

![App Screenshot](https://github.com/AdrianTomin/Smart-Brain-Public/blob/main/frontend/public/smart-brain-demo-2.png?raw=true)

![App Screenshot](https://github.com/AdrianTomin/Smart-Brain-Public/blob/main/frontend/public/smart-brain-demo-1.png?raw=true)




## Demo


https://github.com/AdrianTomin/Smart-Brain-Public/assets/115752624/29389991-230c-467d-96cd-028a3c88174e


## API Key Reference

### To run the application locally, you need to obtain API keys from two services: MongoDB and Clarifai.

#### MongoDB URI
- Sign up or log in to MongoDB: If you don't have an account, you can sign up for free at MongoDB.
- Create a new project: Once logged in, create a new project where you will host your database.
- Get your MongoDB URI: After creating a project, navigate to the project dashboard and locate the "Clusters" section. Click "Connect" for the cluster you created, then select "Connect your application" and copy the provided URI. This URI will be used to connect your application to MongoDB.
- In `/backend`, create a file called `.env` and add the following variable to connect to MongoDB:
- `MONGO_URI=["your_mongo_uri"]`

#### Clarifai API Key
- Sign up or log in to Clarifai: If you don't have an account, sign up for free at Clarifai.
- Create a new application: Once logged in, click the "create" button and fill out the information to create a new app.
- Gather API Keys: Once you have created a new app, navigate to the Clarifai model we will use [here](https://clarifai.com/clarifai/main/models/general-image-recognition). 
- Click on "Use Model", "Call by API", then "Javascript". Here you will see the values we need to provide to call the API we will use.
- In `/frontend`, create a file called `.env.local` and create the following variables with the values that Clarifai provides you with:
- `NEXT_PUBLIC_PAT=[YOUR_PAT]`

- `NEXT_PUBLIC_USER_ID=clarifai`

- `NEXT_PUBLIC_APP_ID=main`

- `NEXT_PUBLIC_MODEL_ID=general-image-recognition`

- `NEXT_PUBLIC_MODEL_VERSION_ID=aa7f35c01e0642fda5cf400f543e7c40`

## Run Locally

To run the application locally, follow these steps:

1. Create a new project directory `mkdir <project-directory>`
2. Navigate to the project directory: `cd <project-directory>`
3. Clone the repository from GitHub: `git clone https://github.com/AdrianTomin/smart-brain-public.git`
4. Install dependencies with either:

   -  `npm i`
   - `yarn add`
   - `pnpm i`

5. Under `/frontend/package.json` run `build-and-start` to start both the front and back end.
6. Open your browser and visit the provided localhost URL to use the application.
   
   
## Authors

- [@AdrianTomin](https://www.github.com/AdrianTomin)





![Logo](https://raw.githubusercontent.com/AdrianTomin/smart-brain-public/main/frontend/public/favicon.ico)
