import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {extendTheme, HStack, NativeBaseProvider, Switch, Text, useColorMode,} from "native-base";
import {FindAnswer} from "./components/FindAnswer";
import {AnswersList} from "./components/AnswersList";
import {ErrorNumber} from "./components/ErrorNumber";

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

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={FindAnswer}
                        options={{title: 'Справочник'}}
                    />
                    <Stack.Screen options={{title: 'Правильные ответы'}} name="Answers" component={AnswersList} />
                    <Stack.Screen name="Error" component={ErrorNumber} />
                </Stack.Navigator>
                {/*<ToggleDarkMode/>*/}
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

// Color Switch Component
function ToggleDarkMode() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <HStack mb={3} space={2} alignItems="center" alignSelf="center">
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
