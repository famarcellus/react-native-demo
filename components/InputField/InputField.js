import { forwardRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


import commonStyle from "../../style/common.style";

const InputField = forwardRef((props, ref) => {

    return (
        <View>
            <Text style={commonStyle.inputLabel}>{props.label}</Text>
            <TextInput
            ref={ref || null}
            autoFocus={props.autoFocus}
            style={[commonStyle.input, !props.validState ? styles.errorBorder : ""]}
            placeholder={props.placeholder}
            placeholderTextColor="#a8a8a8"
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            value={props.inputState}
            onChangeText={props.onInputChange}
            onSubmitEditing={props.onSubmitEditing}
            blurOnSubmit={props.blurOnSubmit}
            onBlur={props.onBlur}
            />
            <Text style={[styles.inlineError, !props.validState ? { opacity: 1 } : ""]}>{props.errorText}</Text>
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
        borderWidth: 1
    }
});


export default InputField;