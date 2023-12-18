import React from 'react'
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { Keyboard } from 'react-native';

export default function Login({props}) {

    const{username,password,setUsername,setPassword,handleLogin} = props

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container} >
            <View style={styles.child}>
                <Text style={{fontSize:20}}>username:</Text>
                <TextInput style={styles.TextInput} value={username} onChangeText={(value) => setUsername(value)} placeholder='username' />
            </View>
            <View style={styles.child}>
                <Text style={{fontSize:20}}>Password:</Text>
                <TextInput style={styles.TextInput} value={password} placeholder='Password' secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
            </View>
            <View>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=>{Keyboard.dismiss();handleLogin()}}>
                    <Text style={{ textAlign: 'center',color:'white', fontSize: 20 }}>Login</Text>
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
  
