import {Box, Center, Heading, HStack, Icon, ScrollView, Text} from "native-base";
import {FlatList} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const AnswersList = ({route, navigation}) => {
    const {base_number, question, answers} = route.params
    console.log(route.params)
    console.log(base_number)
    console.log(question)
    console.log(answers)
    return (
        <Center>
            <ScrollView>
                <Heading my={3}>
                    Вопрос № {base_number}
                </Heading>

                <Text fontSize="xl" italic>
                    {question}
                </Text>

                <FlatList  data={answers}
                          renderItem={({item}) =>
                              <Box  borderBottomWidth="1" _dark={{
                                  borderColor: "gray.600"
                              }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                                  <HStack space={1} w="80%" justifyContent="space-between" alignItems="center">
                                      <Ionicons name='md-checkmark-circle' size={32} color='green' />
                                      <Text fontSize="lg" py="2">{item}</Text>
                                  </HStack>
                              </Box>
                          }
                          keyExtractor={(item, index) => index.toString()}
                />
                <Ionicons onPress={ ()=>{navigation.goBack()}} name="arrow-back-circle" size={45} color="blue" />
            </ScrollView>

        </Center>
    )
}
