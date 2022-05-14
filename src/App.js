import React from 'react';
import { Button, Text, NativeBaseProvider, Box } from "native-base";
import { AppBar } from "./components/common/AppBar";
import { UserIcon } from './components/common/UserIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { StoryItem } from './components/Story/StoryItem';
import { Stories } from './components/Story/Stories';

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <AppBar />
      <Box flex={1} bg="#efefef" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Button>hello</Button>
        <Box>
          <Stories />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}