import { View, Text, StyleSheet, Alert } from 'react-native';
import { useContext, useState } from 'react';
import { useActor } from '@xstate/react';


import { LoggedInContext } from '../../LoggedInContext';
import InputField from '../../components/InputField';
import { AppButton } from '../../components/AppButton';
import commonStyle from '../../style/common.style';


export const Login = () => {

    const validate = () => {
        if(emailState && passwordState && !state.matches("loggedIn")) {
            send("LOADING");
            setTimeout(() => {
                send("LOGIN");
            }, 1800);
        }
    }

    const globalState = useContext(LoggedInContext);
    const [state, send] = useActor(globalState);
    const [emailState, onEmailChange] = useState("");
    const [passwordState, onPasswordChange] = useState("");



    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.loginHeader}>
                    Log In
                </Text>
            </View>
            <View style={{display: "flex", alignItems: "center"}}>
                <Text style={[styles.welcomeText, !state.matches("loggedIn") ? { opacity: 0} : ""]}>Welcome!</Text>
            </View>
            <View style={commonStyle.form}>
                <InputField 
                    label="Email"
                    autoFocus={true}
                    placeholder="example@email.com"
                    keyboardType="email-address"
                    state={emailState}
                    onChangeState={onEmailChange}
                />
                 <InputField 
                    label="Password"
                    autoFocus={false}
                    placeholder="Password"
                    secureTextEntry={true}
                    state={passwordState}
                    onChangeState={onPasswordChange}
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
        marginTop: 125, 
        fontSize: 31.10 
    },
         

});
