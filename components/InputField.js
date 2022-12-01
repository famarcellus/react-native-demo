import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


import commonStyle from "../style/common.style";

// const debounce = (callback, wait) => {
//     let timeoutId = null;
//     return (...args) => {
//       window.clearTimeout(timeoutId);
//       timeoutId = window.setTimeout(() => {
//         callback.apply(null, args);
//       }, wait);
//     };
// }

const InputField = (props) => {

    function validateInput(value) {
        if(props.label == "Email") {
            validateEmail(value);
        }
        if(props.label == "Password") {
            validateLogInPass(value);
        }
    }

    function validateEmail(email) {
        
        const valid = String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        const bool = Boolean(valid);
        props.onChangeValidity(bool);
    
    }

    function validateLogInPass(password) {
        const isNotEmpty = Boolean(password);
        const bool = Boolean(isNotEmpty);
        props.onChangeValidity(bool);
    }

    const isValid = (props?.validState === false);

    return (
        <View>
            <Text style={commonStyle.inputLabel}>{props.label}</Text>
            <TextInput
            autoFocus={props.autoFocus}
            style={[commonStyle.input, isValid ? styles.errorBorder : ""]}
            placeholder={props.placeholder}
            placeholderTextColor="#a8a8a8"
            keyboardType={props?.keyboardType}
            secureTextEntry={props?.secureTextEntry}
            value={props.inputState}
            onChangeText={props.onInputChange}
            onBlur={() => validateInput(props.inputState)}
            />
            {props.label == "Email" && <Text style={[styles.inlineError, isValid ? { opacity: 1 } : ""]}>Please enter a valid email.</Text> }
            {props.label == "Password" && <Text style={[styles.inlineError, isValid ? { opacity: 1 } : ""]}>Please enter your password.</Text> }
        </View>
    )
}


const styles = StyleSheet.create({
    inlineError: {
        color: "red", 
        marginTop: 5, 
        marginBottom: 20, 
        opacity: 0 
    },
    errorBorder: {
        borderColor: "red",
        borderWidth: 2
    }
});


export default InputField;