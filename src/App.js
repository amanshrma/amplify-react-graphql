import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
// import "./App.css";


import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

// const logoo = "IMG-1932.JPG"

function App({ signOut }) {
  return (

    <View className="App" textAlign="center">
      {/* <Image src={require("./IMG-1932.JPG")} alt="logo" /> */}
      <Card textAlign="center">
        <Image width="50%" height="auto" src={require("./IMG-1932.JPG")} className="App-logo" alt="logo" />
        <Heading level={1}>I love my babya!!!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);