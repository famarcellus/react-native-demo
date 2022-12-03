import { View, Text, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import { useActor } from '@xstate/react';
import commonStyle from '../../style/common.style';

import { logInService } from '../../machines/LogInMachine';
import { EmailField } from '../../components/InputField/EmailField';
import { AppButton } from '../../components/AppButton/AppButton';
import { PasswordField } from '../../components/InputField/PasswordField';




export const Login = () => {

    const validate = () => {
        const valid = (validEmailState && validPasswordState && !loggedInState.matches("loggedIn"));

        if(valid) {
            send("LOADING");
            const isCorrectPattern = String(passwordState).match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
            );

            if(isCorrectPattern) {
                setTimeout(() => {
                    send("LOGIN");
                    setIncorrectInfoState(!isCorrectPattern);
                }, 1800);
            }
            if(!isCorrectPattern) {
                setTimeout(() => {
                    send("LOGOUT");
                    setIncorrectInfoState(!isCorrectPattern);
                }, 1000);
            }
        }
        if(!valid && !validPasswordState) {
            setValidPasswordState(false);
        }
    }

    const [loggedInState, send] = useActor(logInService);
    const [emailState, onEmailChange] = useState("");
    const [validEmailState, setValidEmailState] = useState(true);
    const [passwordState, onPasswordChange] = useState("");
    const [validPasswordState, setValidPasswordState] = useState(true);
    const [incorrectInfoState, setIncorrectInfoState] = useState(false);

    const secondInputRef = useRef();

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.loginHeader}>
                    Log In
                </Text>
            </View>
            <View style={{display: "flex", alignItems: "center"}}>
                <Text style={[styles.welcomeText, commonStyle.h2Text, !loggedInState.matches("loggedIn") ? { opacity: 0} : ""]}>Welcome!</Text>
                <Text style={[{ color: "red", fontSize: 18, fontWeight: "600" }, incorrectInfoState ? { opacity: 1 } : { opacity: 0 }]}>Incorrect email or password.</Text>
            </View>
            <View style={commonStyle.form}>
                <EmailField 
                autoFocus={true}
                inputState={emailState}
                onInputChange={onEmailChange}
                validState={validEmailState}
                onChangeValidity={setValidEmailState}
                onSubmitEditing={() => { secondInputRef.current.focus() }}
                blurOnSubmit={false}
                />
                <PasswordField
                ref={secondInputRef}
                inputState={passwordState}
                onInputChange={onPasswordChange}
                validState={validPasswordState}
                onChangeValidity={setValidPasswordState}
                onSubmitEditing={() => { validate() }}
                />
                <AppButton 
                btnType="primary"
                btnText={loggedInState.matches("loggedIn") ? "Logged In" : "Log In"}
                loading={loggedInState.matches("loading")}
                onPress={() => validate()}
                />
                <Text style={{ marginTop: 25 }}>Don't Have An Account Yet?</Text>
                <AppButton 
                btnType="secondary"
                btnText="Sign Up"
                onPress=""
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
    },

    loginHeader: {
        fontSize: 37.32,
        fontWeight: "bold",
    },

    welcomeText: { 
        fontWeight: "500", 
        marginTop: 55, 
    },
         
});
