import React from 'react'
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { Keyboard } from 'react-native';

export default function Signup({props}) {

    const{email,password,setEmail,setPassword,confirmPassword,setConfirmPassword,handleSignup} = props

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container} >
            <View style={styles.child}>
                <Text style={{fontSize:20}}>Email:</Text>
                <TextInput style={styles.TextInput} value={email} onChangeText={(value) => setEmail(value)} />
            </View>
            <View style={styles.child}>
                <Text style={{fontSize:20}}>Password:</Text>
                <TextInput style={styles.TextInput} value={password} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
            </View>
            <View style={styles.child}>
                <Text style={{fontSize:20}}>Confirm Password:</Text>
                <TextInput style={styles.TextInput} value={confirmPassword} secureTextEntry={true} onChangeText={(value) => setConfirmPassword(value)} />
            </View>
            <View>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=>{Keyboard.dismiss();handleSignup()}}>
                    <Text style={{ textAlign: 'center',color:'white', fontSize: 20 }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      rowGap:20,
      paddingTop: 20,
    },
    text: {
      fontSize: 30,
      fontWeight: '700',
  
    },
    child: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '90%'
    },
    TextInput: {
      borderWidth: 3,
      borderRadius: 100,
      padding: 4,
      textAlignVertical: 'center',
      width:200,
      textAlign:'center',
      
    },
    btn: {
      backgroundColor: 'black',
      borderRadius: 40,
      padding: 10,
      width: 100,
    },
  });
  
