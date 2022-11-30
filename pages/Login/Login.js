import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import InputField from '../../components/InputField';
import { AppButton } from '../../components/AppButton';
import commonStyle from '../../style/common.style';

export const Login = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.loginHeader}>
                    Log In
                </Text>
            </View>
            <View style={commonStyle.form}>
                <InputField 
                    label="Email"
                    autoFocus={true}
                    placeholder="example@email.com"
                    keyboardType="email-address"
                />
                 <InputField 
                    label="Password"
                    autoFocus={false}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <AppButton 
                btnType="primary"
                btnText="Log In"
                />
                <Text style={{ marginTop: 25, width: "100%" }}>Don't Have An Account Yet?</Text>
                <AppButton 
                btnType="secondary"
                btnText="Sign Up"
                />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
    },

    loginHeader: {
        fontSize: 37.32,
        fontWeight: "bold",
    },

});
