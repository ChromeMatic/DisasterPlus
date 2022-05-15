import React from "react";
import {ScrollView, SafeAreaView, StyleSheet, View, Text, Dimensions, TouchableOpacity} from "react-native";

const InfoBox= () => {
    return(
        <View>
            <Text>{'Fire Admin page'.toUpperCase()}</Text>
        </View>
    );
}

const FireAdmin = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <InfoBox/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{ flex:1},
    scrollView: { marginTop:20,},
});

export default FireAdmin