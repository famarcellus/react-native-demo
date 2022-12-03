import { Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";

import commonStyle from "../../style/common.style";

export const AppButton = (props) => {
    
    return (
        <TouchableOpacity onPress={() => {props?.onPress ? props.onPress() : ""}} style={[commonStyle.btn, props.buttonStyles, { marginTop: 10, width: "100%" }]}>
            <Text style={[commonStyle.buttonLabel, props.textStyles]}>{props.loading ? <ActivityIndicator size="small" color="#ffffff" style={{ width: 30, height: 30 }}/> : props.buttonText}</Text>
        </TouchableOpacity>
    )
}