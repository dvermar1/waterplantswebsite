export default {
  oidc: {
    clientId: '0oa1ebw5njlc9Tgnz5d7',
    issuer: 'https://dev-94896909.okta.com/oauth2/default',
    redirectUri: 'https://automatic-water-plants.herokuapp.com/login/callback',
    //redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  }
};
