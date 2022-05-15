import React from "react";
import {Text,View,TextInput,TouchableOpacity, SafeAreaView,ScrollView} from "react-native";
import MakePlanStyles from "../StyleSheets/MakePlanStyles";
import {useNavigation} from "@react-navigation/native";

const MakePlan = () =>{

    const nav = useNavigation();

    const Save = () => {}

    const SaveBtn = () =>{
        return(
            <View style={MakePlanStyles.saveBtnCon}>
                <TouchableOpacity onPress={Save} style={MakePlanStyles.SaveBtn}>
                    <Text style={MakePlanStyles.SaveBtnText}>
                        {'SAVE'.toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
      <ScrollView>
          <SafeAreaView style={MakePlanStyles.container}>

              <View style={MakePlanStyles.headerCon}>
                  <Text style={MakePlanStyles.headerText}>
                      {'MAKE A PLAN'.toUpperCase()}
                  </Text>
              </View>

              <View style={MakePlanStyles.innerCon}>
                  <View style={MakePlanStyles.Box}>
                      <TextInput
                          placeholder="FULL NAME"
                          style={MakePlanStyles.input}
                      />
                  </View>

                  <View style={MakePlanStyles.Box}>
                      <TextInput
                          placeholder="NAME OF PLAN"
                          style={MakePlanStyles.input}
                      />
                  </View>

                  <View style={MakePlanStyles.Box}>
                      <TextInput
                          placeholder="NAME OF SHELTER"
                          style={MakePlanStyles.input}
                      />
                  </View>

                  <View style={MakePlanStyles.Box}>
                      <TextInput
                          placeholder="EMERGENCY CONTACT NUMBER"
                          style={MakePlanStyles.input}
                      />
                  </View>

                  <View style={MakePlanStyles.Box}>
                      <TextInput
                          placeholder="NEXT OF KIN NAME"
                          style={MakePlanStyles.input}
                      />
                  </View>

                  <SaveBtn/>

              </View>
          </SafeAreaView>
      </ScrollView>
    );
}
export  default  MakePlan;