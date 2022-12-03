import { useEffect, forwardRef } from "react";

import InputField from "./InputField";

export const PasswordField = forwardRef((props, ref) => {

    function verifyNotEmpty(password) {
        const isNotEmpty = Boolean(password);
        const bool = Boolean(isNotEmpty);
        props.onChangeValidity(bool);
    }

    useEffect(() => {
        if(props.inputState) {
            verifyNotEmpty(props.inputState);
        } 
    }, [props.inputState]);

    return (
        <InputField 
        ref={ref}
        label={props?.label || "Password"}
        autoFocus={false}
        placeholder={props.placeholder || "Password"}
        secureTextEntry={true}
        inputState={props.inputState}
        onInputChange={props.onInputChange}
        validState={props.validState}
        onChangeValidity={props.onChangeValidity}
        onSubmitEditing={props.onSubmitEditing}
        blurOnSubmit={true}
        onBlur={() => verifyNotEmpty(props.inputState)}
        errorText="Please enter your password."
        />
    )
});