import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
 
export default class SendToDropbox extends Component {
  render() {
    console.log(process.env.REACT_APP_CLIENT_ID);
    return (
      <OauthSender
        authorizeUrl="https://www.dropbox.com/oauth2/authorize"
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri="https://www.yourapp.com/auth/dropbox"
        state={{ from: '/settings' }}
        render={({ url }) => <a href={url}>Connect to Dropbox</a>}
      />
    );
  }
}