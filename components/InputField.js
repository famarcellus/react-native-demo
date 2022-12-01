import React, { useEffect } from "react";
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

const InputField = React.forwardRef((props, ref) => {

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

    useEffect(() => {
        if(props.label == "Password" && props.inputState) {
            validateInput(props.inputState);
        } 
    }, [props.inputState])

    return (
        <View>
            <Text style={commonStyle.inputLabel}>{props.label}</Text>
            <TextInput
            ref={ref}
            autoFocus={props.autoFocus}
            style={[commonStyle.input, !props.validState ? styles.errorBorder : ""]}
            placeholder={props.placeholder}
            placeholderTextColor="#a8a8a8"
            keyboardType={props?.keyboardType}
            secureTextEntry={props?.secureTextEntry}
            value={props.inputState}
            onChangeText={props.onInputChange}
            onSubmitEditing={props.onSubmitEditing}
            blurOnSubmit={props.blurOnSubmit}
            onBlur={() => validateInput(props.inputState)}
            />
            {props.label == "Email" && <Text style={[styles.inlineError, !props.validState ? { opacity: 1 } : ""]}>Please enter a valid email.</Text> }
            {props.label == "Password" && <Text style={[styles.inlineError, !props.validState? { opacity: 1 } : ""]}>Please enter your password.</Text> }
        </View>
    )
});


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