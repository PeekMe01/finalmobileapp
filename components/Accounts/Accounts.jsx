import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import accounts from './accounts.json'
import { useNavigation } from '@react-navigation/native'

export default function Accounts({route}) {
    const navigation = useNavigation();
    const{user,setUser,enteredOtp,setEnteredOtp} = route.params;

  return (
    <View>
        <View>
            <TouchableOpacity style={[styles.btn,{backgroundColor: 'red'}]} activeOpacity={0.8} onPress={()=>{Keyboard.dismiss(),alert('LOGGED OUT!'),setUser(null),setEnteredOtp(false)}}>
                <Text style={{ textAlign: 'center',color:'white', fontSize: 20 }}>Logout</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={accounts}
            renderItem={(item) => (
                <>
                <Text style={{ fontSize: 18, alignSelf: 'center' }}>Account ID: {item.item.id}</Text>
                <View style={styles.thing}>
                    <View>
                        <Text style={{ fontSize: 16, padding: 5 }}>Name: {item.item.name}</Text>
                        <Text style={{ fontSize: 16, padding: 5 }}>currency: {item.item.currency}</Text>
                        <Text style={{ fontSize: 16, padding: 5 }}>Balance: {item.item.Balance}</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                         style={{ padding: 30, backgroundColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
                         onPress={()=>{navigation.navigate('Transactions',{tran: item.item.transactions})}}
                         >
                            <Text>Check Transactions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </>
              )}
        />
    </View>
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
      width: '100%'
    },
    thing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '70%',
        backgroundColor: '#D4AD5A',
        padding: 10,
        margin: 10,
        borderRadius: 30,
        gap: 10
      }
})