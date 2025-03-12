const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolClientId: 'YOUR_USER_POOL_CLIENT_ID',
      signUpVerificationMethod: 'code',
    }
  }
};

export default amplifyConfig;