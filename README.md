# Front-End music-stream-selector
* URL: https://moodybeats.netlify.com
* Goal: Copyright free music for everyone.
---
## How To Run Locally
* Git Clone https://github.com/labs12-music-stream-selector/Front-End.git
* Run `yarn` in the directory of the cloned repository.
* Add `.env` file with the appropriate API address you are using in the root directory. (See Environment File Section of Readme)
* Run `yarn start` to run the React Application.
---
## Client Side Routes
* / - Landing Page/Google Login View
* /Home - Home/Lists of the songs and music player.
* /user - Profile view, also for editing profile.
---
## Environment File
The environment file is required to run this project. The reason is because we store our API URL inside of it, and it's used all over the client for HTTP request with the Axios library. The environment file must be in the root directory of the project, outside of the /src directory. For the environment variable to be used in the project, you must have an assignment like this. Where the value is the link to the API that is being used. In our code, this can be used with the variable `process.env.REACT_FE_API`.

* Local Host : `REACT_FE_API='http://localhost:3000'`
* Production : `REACT_FE_API='https://fantabulous-music-finder.heroukuapp.com'`
---

# Style Guide
#### Languages & tools
* ### HTML
* ### JavaScript - [React](http://facebook.github.io/react) is used for UI.
* ### CSS
## Technologies Used in Project
* [React](https://reactjs.org/)
* [React-Router](https://github.com/ReactTraining/react-router#readme)
* [Axios](https://github.com/axios/axios)
* [styled-components](https://www.styled-components.com/)
* [OAuth and Google Sign In](https://developers.google.com/actions/identity/google-sign-in-oauth)
* [Knex](https://knexjs.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Google-Api](https://console.developers.google.com/apis/dashboard?project=music-finder-239119&pli=1)
* [Youtube-Api](https://developers.google.com/youtube/v3/)

