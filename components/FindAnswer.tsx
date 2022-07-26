import {Button, Center, FormControl, Input, Stack, View} from "native-base";
import React, {useEffect, useState} from "react";
import {FontAwesome} from '@expo/vector-icons';

const answers = require('../answers_base/answers.json')

export const FindAnswer = ({navigation}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [questionNumber, setQuestionNumber] = useState('');
    const [errors, setErrors] = React.useState({
        symbol: '',
        length: ''
    });

    useEffect(() => {
        if (errors.symbol === '' && errors.length === '' && questionNumber.length > 0) {
            setIsButtonDisabled(false)
            console.log(`isButtonDisabled: ${isButtonDisabled}`)
        } else {
            setIsButtonDisabled(true)
        }
    }, [errors.symbol, errors.length, questionNumber])

    const findQuestionAnswers = () => {
        // validate(questionNumber)
        console.log(questionNumber)
        setQuestionNumber('')
        const currentAnswers = answers[questionNumber]
        console.log(currentAnswers)

        if(currentAnswers){
            const params = {
                base_number: currentAnswers.base_number,
                question: currentAnswers.question,
                answers: currentAnswers.answers,
            }
            navigation.navigate('Answers', {...params})
        } else{
            navigation.navigate('Error')
        }


    }
    const handleChangeNumber = (text: string) => {
        validateInput(text) ? console.log(`Валидация пройдена.`) : console.log(`Ошибка валидации. errors: ${errors}`)
        setQuestionNumber(text)
        console.log(errors)
    }

    const validateInput = (text: string) => {
        console.log(`Введена строка: ${text}`)
        const lastSymbol = text[text.length - 1]
        console.log(`Последний символ: ${lastSymbol}, type: ${typeof lastSymbol}`)

        const enteredCharactersArray = [...text]
        const arrayOfValidCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (let i = 0; i < enteredCharactersArray.length; i++) {
            if (!arrayOfValidCharacters.includes(enteredCharactersArray[i])) {
                setErrors({
                    ...errors,
                    symbol: 'Номера вопросов в базе состоят только из цифр'
                });

                return false;
            }
            if (Number(text) > 20000) {
                setErrors({
                    ...errors,
                    length: 'В базе менее 20 000 вопросов'
                });

                return false;
            }
        }

        setErrors({
            ...errors,
            symbol: '',
            length: ''
        })
        return true
    }

    return (
        <Center
            _dark={{bg: "blueGray.900"}}
            _light={{bg: "blueGray.50"}}
            px={4}
            flex={1}
        >
        <FormControl isRequired isInvalid={'length' in errors || 'symbol' in errors}>
            <Stack>
                <Center>
                    <Input textAlign="center" autoFocus={true} keyboardType="numeric" value={questionNumber}
                           onChangeText={handleChangeNumber} onSubmitEditing={findQuestionAnswers} mb={5} p={5}  w={{
                        base: "70%",
                        md: "100%"
                    }}
                           size="md" placeholder="Введите номер вопроса"
                           InputRightElement={
                        <View mr="3">
                            <FontAwesome name="question-circle"  size={48} color="green" />
                        </View>
                           }
                    />

                    {'symbol' in errors ? <FormControl.ErrorMessage mb={5}>{errors.symbol}</FormControl.ErrorMessage> :
                        <FormControl.HelperText mb={5}>
                            Вводить можно только цифры
                        </FormControl.HelperText>}
                    {'length' in errors ?
                        <FormControl.ErrorMessage mb={5}>{errors.length}</FormControl.ErrorMessage> :
                        <FormControl.HelperText mb={5}>
                            Количество вопросов в базе не превышает 20 000
                        </FormControl.HelperText>}
                    <Button isDisabled={isButtonDisabled} p={5} w={{
                        base: "70%",
                        md: "100%"
                    }} onPress={findQuestionAnswers}>Узнать ответы</Button>
                    <FormControl isDisabled={!isButtonDisabled}>
                        <Center>
                            <FormControl.Label _disabled={{
                                _text: {
                                    display: "none"
                                }
                            }}>Номер вопроса - обязательный параметр</FormControl.Label>
                        </Center>
                    </FormControl>
                </Center>
            </Stack>
        </FormControl>
        </Center>
    )
}
