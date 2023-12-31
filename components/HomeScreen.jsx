import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native"
import Blob3 from "../assets/Blob3.png";
import Blob4 from "../assets/Blob4.png";
import RightArrow from "../assets/arrowRight.svg";
import Info from "../assets/info.svg";
import HomeTabLogo from "../assets/homeTabLogo.svg";
import HomeCoinIcon from "../assets/homeCoinIcon.svg";


const HomeScreen = () => {
    return (
        <View
            style={[styles.flexContainer]}
        >
            <Image source={Blob3} style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 2
            }}/>
            <Image source={Blob4} style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: 2
            }}/>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable style={[styles.headerButton, {
                        paddingHorizontal: 16,
                        flexDirection: "row",
                        alignItems: "center"
                    }]}>
                        <Text style={styles.headerButtonText}>Brooklyn Simmons</Text>
                        <RightArrow/>
                    </Pressable>
                    <Pressable style={[styles.headerButton]}>
                        <Info/>
                    </Pressable>
                </View>
                <View style={styles.center}>
                    <View style={{marginBottom: 39}}>
                        <Text style={styles.centerTitle}>Tap to Durt</Text>
                    </View>
                    <View>
                        <Pressable style={styles.centerButton}>
                            <View style={{
                                borderWidth: 10,
                                borderRadius: 1000,
                                borderColor: "rgba(255, 255, 255, 0.05)"
                            }}>
                                <View style={{
                                    borderWidth: 10,
                                    borderRadius: 1000,
                                    borderColor: "rgba(255, 255, 255, 0.1)"
                                }}>
                                    <View style={{
                                        borderWidth: 5,
                                        borderRadius: 1000,
                                        borderColor: "rgba(255, 255, 255, 0.2)"
                                    }}>
                                        <HomeTabLogo/>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Pressable style={styles.bottomTabBar}>
                        <Text style={styles.owned}>Owned DURTs</Text>
                         <View style={styles.coin}>
                             <HomeCoinIcon/>
                             <Text style={{
                                 color: "#8D65FF",
                                 fontSize: 24,
                                 fontFamily: "Roboto_Bold"
                             }}>2048</Text>
                         </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flexContainer: {
        backgroundColor: "#010101",
        flex: 1,
        paddingTop: 17.5 + 44
    },
    container: {
        zIndex: 3,
        paddingHorizontal: 16,
        width: "100%"
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 117.5
    },
    headerButton: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.16)",
        borderStyle: "solid",
        backgroundColor: "#252525"
    },
    headerButtonText: {
        marginRight: 13,
        fontSize: 14,
        fontFamily: "Roboto_Bold",
        color: "#FFF"
    },
    center: {
        marginBottom: 100
    },
    centerTitle: {
        textAlign: "center",
        color: "#fff",
        fontSize: 24,
        fontFamily: "Roboto_Bold"
    },
    centerButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    bottomTabBar: {
        backgroundColor: "rgba(141, 101, 255, 0.16)",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    coin: {
        gap: 2,
        flexDirection: "row",
        alignItems: "center"
    },
    owned: {
        fontSize: 14,
        color: "#fff",
        fontFamily: "Roboto_Bold"
    }
})

export default HomeScreen;