// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'j4ymcpdonc'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'fullstackengi.us.auth0.com',            // Auth0 domain
  clientId: 'WWP5nOmcmh2MwbMVefze0pViQjA1MfKii',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
