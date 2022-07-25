import {Center, Flex, Heading, HStack, ScrollView, Stack, Text, View} from "native-base";
import {Ionicons} from '@expo/vector-icons';


export const AnswersList = ({route, navigation}) => {
    const {base_number, question, answers} = route.params
    console.log(route.params)
    console.log(base_number)
    console.log(question)
    console.log(answers)
    return (
        <Center flex="1">
            <Flex flexDirection="column" w="90%" justifyContent="space-between" flex="1">
                <HStack flexDirection="column" w="95%" flex="1">
                <Center>
                    <Heading my={3}>
                        Вопрос № {base_number}
                    </Heading>
                    <Text style={{textAlign: "center"}} w="100%" fontSize="md" italic colorScheme="primary">
                        {question}
                    </Text>
                </Center>

                    <ScrollView flex="1">
                        {answers.map((item) =>
                            (<Stack bg="primary.500" rounded="lg" direction="row" flex="1" key={item}
                                    justifyContent="space-around" mb="5%"
                                    alignItems="center">
                                <View flex="1" mx="5%">
                                    <Ionicons name='md-checkmark-circle' size={32} color='green'/>
                                </View>
                                <Text color="white" flex="7" fontSize="lg" p="5%">{item}</Text>
                            </Stack>)
                        )}
                    </ScrollView>

                </HStack>

                <Center h="15%" justifyContent="center">
                    <Ionicons onPress={() => {
                        navigation.goBack()
                    }} name="arrow-back-circle" size={50} color="blue"/>
                </Center>
            </Flex>
        </Center>
    )
}
