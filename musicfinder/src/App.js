import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./components/LandingPage/LandingPage.js";
import Navigation from "./components/Navigation/Navigation";

import GetUserPlaylists from "./components/UserPlaylists/GetUserPlaylists.js";

function App() {
  return (
    <Router>
      <GetUserPlaylists />
      <RouterDiv className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Navigation} />
      </RouterDiv>
    </Router>
  );
}
export default App;

const RouterDiv = styled.div`
  witdth: 100%;
  min-height: 100vh;
<<<<<<< HEAD
  background: #705771;
`;
=======
  background: #696773;
  padding-top: 40px;
`
>>>>>>> 365c3515ef79c8e2c0282a44f7128988030de84d
