import React, { Component } from "react";
// import GoogleLogin from "react-google-login";
import axios from "axios";
import { Redirect } from "react-router-dom";

import GetUserPlaylists from "../UserPlaylists/GetUserPlaylists.js";

export default class OAuthGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  signup = (res, type) => {
    let postData;
    if (type === "google" && res.w3.U3) {
      console.log(res);
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    if (postData) {
      // console.log(postData);
      PostData(postData).then(result => {
        sessionStorage.setItem(
          "token",
          result.data.token,
          "id",
          result.data.id
        );
        this.setState({ redirect: true });
      });
    } else {
    }
  };
  render() {
    if (this.state.redirect || sessionStorage.getItem("token")) {
      return <Redirect to={"/home"} />;
    }
    const responseGoogle = response => {
      this.signup(response, "google");
    };
    // Md's Client ID from Google
    // "557783495237-jqq3d269c5ee4uvbg0bv74rs1sb91g90.apps.googleusercontent.com"
    const CLIENTID_MD =
      "557783495237-jqq3d269c5ee4uvbg0bv74rs1sb91g90.apps.googleusercontent.com";

    // Logan's Client ID from Google
    // "1023911349266-uh3fvbbt7d652443db15q3f477v3oa9v.apps.googleusercontent.com"
    const CLIENTID_LOGAN =
      "1023911349266-uh3fvbbt7d652443db15q3f477v3oa9v.apps.googleusercontent.com";
    return (
      <div>
        <GetUserPlaylists responseGoogle={responseGoogle} />
        {/* <GoogleLogin
          clientId={CLIENTID_MD}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        /> */}
      </div>
    );
  }
}

export function PostData(userData) {
  const url =
    // 'localhost:5000/api/register/oauth';
    "https://fantabulous-music-finder.herokuapp.com/api/register/oauth";
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(url, {
          name: userData.name,
          email: userData.email,
          token: userData.token
        })
        .then(res => {
          console.log("res");
          resolve(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
        })
        .catch(error => {
          reject(error);
        });
      // alert("successfully logged in");
    } catch (err) {
      console.log({ Mesage: { err } });
    }
  });
}
