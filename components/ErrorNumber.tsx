import {Center, Heading, Stack, View} from "native-base";
import {Ionicons} from "@expo/vector-icons";

export const ErrorNumber = ({navigation}) => {
    return (
        <Center
            bg="primary.700"
            _dark={{bg: "blueGray.900"}}
            _light={{bg: "blueGray.50"}}
            px={4}
            pt={20}
            flex={1}
            h="100%">
            <Stack h="100%" alignItems="center" justifyContent="space-between" flex={1}>
                <Heading alignSelf="center" fontSize={25}>В базе отсутствует вопрос с таким номером!</Heading>
                <View h="15%">
                    <Ionicons onPress={() => {
                        navigation.navigate('Home')
                    }}
                              name="arrow-back-circle" size={45} color="blue"/>
                </View>
            </Stack>
        </Center>


    )
}
