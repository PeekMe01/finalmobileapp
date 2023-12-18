import React from 'react'
import { Text } from 'react-native'
import { View, FlatList, StyleSheet } from 'react-native'

export default function Transactions({navigation,route}) {
    const tran = route.params;
    //console.log(tran)
  return (
    <View>
        {console.log(tran.tran)}
        <FlatList
            data={tran.tran}
            renderItem={(item) => (
                <>
                {console.log(item)}
                <Text style={{ fontSize: 18, alignSelf: 'center' }}>Transaction ID: {item.item.id}</Text>
                <View style={styles.thing}>
                    <View>
                        <Text style={{ fontSize: 16, padding: 5 }}>Type: {item.item.type}</Text>
                        <Text style={{ fontSize: 16, padding: 5 }}>Amount: {item.item.amount}</Text>
                        <Text style={{ fontSize: 16, padding: 5 }}>Description: {item.item.description}</Text>
                        <Text style={{ fontSize: 16, padding: 5 }}>Date: {item.item.date}</Text>
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