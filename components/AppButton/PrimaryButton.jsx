import { AppButton } from "./AppButton";
import commonStyle from "../../style/common.style";

export const PrimaryButton = (props) => {
    return (
        <AppButton 
        onPress={props.onPress}
        loading={props.loading}
        buttonText={props.buttonText}
        buttonStyles={commonStyle.primaryBtn}
        textStyles={commonStyle.whiteText}
        />
    );
}