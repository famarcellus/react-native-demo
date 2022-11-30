import { Text, TouchableOpacity } from "react-native";

import commonStyle from "../style/common.style";

export const AppButton = (props) => {

    const buttonStyles = [commonStyle.btn];
    const textStyles = [commonStyle.buttonLabel];

    if(props.btnType == "primary") {
        buttonStyles.push(commonStyle.primaryBtn);
        textStyles.push(commonStyle.whiteText)
    }
    if(props.btnType == "secondary") {
        buttonStyles.push(commonStyle.secondaryBtn);
        textStyles.push(commonStyle.primaryTextColor);
    }

    return (
        <TouchableOpacity style={[...buttonStyles, { marginTop: 10, width: "100%" }]}>
            <Text style={[...textStyles]}>{props.btnText}</Text>
        </TouchableOpacity>
    )
}