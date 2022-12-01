import { View, Text, StyleSheet, Alert } from 'react-native';
import { useContext, useState } from 'react';
import { useActor } from '@xstate/react';


import { LoggedInContext } from '../../LoggedInContext';
import InputField from '../../components/InputField';
import { AppButton } from '../../components/AppButton';
import commonStyle from '../../style/common.style';


export const Login = () => {

    const validate = () => {
        const valid = (validEmailState && validPasswordState && !state.matches("loggedIn"));

        if(valid) {
            send("LOADING");
            const validPassRegex = String(passwordState).match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
            );

            if(validPassRegex) {
                setTimeout(() => {
                    send("LOGIN");
                    setIncorrectInfoState(!validPassRegex);
                }, 1800);
            }
            if(!validPassRegex) {
                setTimeout(() => {
                    send("LOGOUT");
                    setIncorrectInfoState(!validPassRegex);
                }, 1000);
            }
        }
        if(!valid && !validPasswordState) {
            setValidPasswordState(false);
        }
    }

    const globalState = useContext(LoggedInContext);
    const [state, send] = useActor(globalState);
    const [emailState, onEmailChange] = useState("");
    const [validEmailState, setValidEmailState] = useState("");
    const [passwordState, onPasswordChange] = useState("");
    const [validPasswordState, setValidPasswordState] = useState("");
    const [incorrectInfoState, setIncorrectInfoState] = useState(false);

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.loginHeader}>
                    Log In
                </Text>
            </View>
            <View style={{display: "flex", alignItems: "center"}}>
                <Text style={[styles.welcomeText, styles.h2Text, !state.matches("loggedIn") ? { opacity: 0} : ""]}>Welcome!</Text>
                <Text style={[styles.h2Text, { color: "red", fontSize: 19, fontWeight: "600" }, incorrectInfoState ? { opacity: 1 } : { opacity: 0 }]}>Incorrect email or password.</Text>
            </View>
            <View style={commonStyle.form}>
                <InputField 
                    label="Email"
                    autoFocus={true}
                    placeholder="example@email.com"
                    keyboardType="email-address"
                    inputState={emailState}
                    onInputChange={onEmailChange}
                    validState={validEmailState}
                    onChangeValidity={setValidEmailState}
                />
                 <InputField 
                    label="Password"
                    autoFocus={false}
                    placeholder="Password"
                    secureTextEntry={true}
                    inputState={passwordState}
                    onInputChange={onPasswordChange}
                    validState={validPasswordState}
                    onChangeValidity={setValidPasswordState}
                />
                <AppButton 
                btnType="primary"
                btnText={state.matches("loggedIn") ? "Logged In" : "Log In"}
                loading={state.matches("loading")}
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

    h2Text: {
        fontSize: 31.10 
    }
         

});
