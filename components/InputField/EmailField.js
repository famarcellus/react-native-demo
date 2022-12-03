import { useEffect } from "react";

import InputField from "./InputField";

export const EmailField = (props) => {

    function validateEmail(email) {
        const valid = String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        const bool = Boolean(valid);
        props.onChangeValidity(bool);
    }

    useEffect(() => {
        if(props.inputState && props.validState == false) {
            validateEmail(props.inputState);
        } 
    }, [props.inputState]);

    return (
        <InputField 
            label="Email"
            autoFocus={true}
            placeholder="example@email.com"
            keyboardType="email-address"
            inputState={props.inputState}
            secureTextEntry={false}
            onInputChange={props.onInputChange}
            validState={props.validState}
            onChangeValidity={props.onChangeValidity}
            onSubmitEditing={props.onSubmitEditing}
            blurOnSubmit={false}
            onBlur={() => validateEmail(props.inputState)}
            errorText="Please enter a valid email."
        />
    )
};