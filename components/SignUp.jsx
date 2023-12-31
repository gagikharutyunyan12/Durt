import React, {useState} from "react";
import {
    Image,
    Pressable,
    View,
    Text,
    StyleSheet,
    TextInput,
} from "react-native";
import Logo from "../assets/Logo.svg";
import {FIREBASE_AUTH} from "../FirebaseConfig";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import Blob1 from "../assets/Blob1.png"
import Blob2 from "../assets/Blob2.png"

const Registration = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = FIREBASE_AUTH;

    const handleInputChange = (inputText) => {
        setEmail(inputText);
    };

    const handlePasswordChange = (e) => {
        setPassword(e);
    };

    const signIn = async () => {
        navigation.navigate("SignIn")
    };

    const signUp = async () => {
        navigation.navigate("SignUp")
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.navigate("HomeScreen")
        } catch (error) {
            console.log(error);
            alert("Sign up failed" + error.message);
        }
    }

    return (
        <View
            style={[styles.flexContainer]}
        >
            <Image source={Blob1} style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1
            }}/>
            <Image source={Blob2} style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: 1
            }}/>

            <View style={[styles.container]}>
                <View style={{flex: 1, alignItems: "center"}}>
                    <Logo style={styles.logo}/>
                    <Text style={styles.title}>Welcome to Durt</Text>
                    <Text style={styles.subtitle}>Please sign up to Continue</Text>
                    <TextInput
                        autoCapitalize='none'
                        placeholder="Email Address"
                        type="email"
                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                        textColor="white"
                        value={email}
                        style={styles.input}
                        onChangeText={handleInputChange}
                    />
                    <TextInput
                        autoCapitalize='none'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                        value={password}
                        style={styles.input}
                        onChangeText={handlePasswordChange}
                    />
                    <Pressable
                        style={styles.button}
                        onPress={signUp}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Pressable>
                </View>
                <Pressable
                    style={styles.signInBut}
                    onPress={signIn}
                >
                    <Text style={styles.signInButton}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 84,
        paddingBottom: 50,
        paddingHorizontal: 16,
        zIndex: 3,
    },
    forgotPasswordBut: {
        backgroundColor: "transparent",
        justifyContent: "center",
        width: 343,
        margin: 8,
        height: 46,
        borderRadius: 12,
    },
    forgotPassword: {
        textAlign: "center",
        color: "white",
    },
    button: {
        justifyContent: "center",
        width: 343,
        margin: 8,
        height: 46,
        backgroundColor: "rgba(141, 101, 255, 1)",
        borderRadius: 12,
    },
    signInBut: {
        backgroundColor: "transparent",
        justifyContent: "center",
        width: 343,
        margin: 8,
        height: 46,
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 2,
    },

    buttonText: {
        textAlign: "center",
        color: "white",
    },

    signInButton: {
        backgroundColor: 'transparent',
        textAlign: "center",
        color: "white",
    },
    logo: {
        marginBottom: 113.27,
    },
    subtitle: {
        color: "rgba(255, 255, 255, 0.60)",
        fontSize: 14,
        marginBottom: 48,
        fontFamily: 'Roboto_Medium',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto_Bold',
        fontWeight: "bold",
        color: "white",
        marginBottom: 4,
    },
    flexContainer: {
        paddingTop: 40,
        position: "relative",
        zIndex: -1,
        backgroundColor: "#010101",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    input: {
        borderColor: "gray",
        borderWidth: 2,
        backgroundColor: "#1C1C1C",
        borderRadius: 12,
        margin: 8,
        height: 50,
        paddingLeft: 16,
        paddingRight: 16,
        borderStyle: "solid",
        width: 343,
        color: "white",
    },
});

export default Registration;