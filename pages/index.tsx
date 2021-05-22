import { GoogleLogin } from "react-google-login";

export default function Home() {
  return (
    <div>
      <h1>Google Sign In</h1>

      <GoogleLogin
        clientId="valid-client-id-here"
        onSuccess={(response) => console.log(response)}
        onFailure={(error) => console.log(error)}
      />
    </div>
  );
}
