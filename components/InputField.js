import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import commonStyle from "../style/common.style";

const InputField = (props) => {

    const [inputValue, onChangeInputValue] = useState("");

    return (
        <View>
            <Text style={commonStyle.inputLabel}>{props.label}</Text>
            <TextInput
            autoFocus={props.autoFocus}
            style={commonStyle.input}
            placeholder={props.placeholder}
            placeholderTextColor="#a8a8a8"
            keyboardType={props?.keyboardType}
            secureTextEntry={props?.secureTextEntry}
            value={inputValue}
            onChangeText={onChangeInputValue}
            />
        </View>
    )
}


export default InputField;