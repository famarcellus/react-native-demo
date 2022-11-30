import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import commonStyle from "../style/common.style";

const InputField = (props) => {

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
            value={props.state}
            onChangeText={props.onChangeState}
            />
        </View>
    )
}


export default InputField;