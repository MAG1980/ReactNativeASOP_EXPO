import React from "react";
import {Center, extendTheme, HStack, NativeBaseProvider, Switch, Text, useColorMode, VStack,} from "native-base";
import {FindAnswer} from "./components/FindAnswer";

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({config});
type MyThemeType = typeof theme;
declare module "native-base" {
    interface ICustomTheme extends MyThemeType {
    }
}
export default function App() {
    return (
        <NativeBaseProvider>
            <ToggleDarkMode/>
            <Center
                _dark={{bg: "blueGray.900"}}
                _light={{bg: "blueGray.50"}}
                px={4}
                flex={1}
            >

                <FindAnswer/>

                <VStack space={5} alignItems="center">
                    {/*                    <NativeBaseIcon />
                    <Heading size="lg">Welcome to NativeBase</Heading>*/}
                </VStack>
            </Center>
        </NativeBaseProvider>
    );
}

// Color Switch Component
function ToggleDarkMode() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}
