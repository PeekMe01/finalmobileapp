import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Accounts from './components/Accounts/Accounts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import users from './data.json'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Transactions from './components/Accounts/Transactions';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
let otp;

export const CustomIconComponent = ({ color, size, name }) => {
  return (
      <View>
          <Icon name={name} size={size} color={color} />
      </View>
  );
};

export default function App() {

  useEffect(() => {
     
  }, [otp]);

  const[username,setUsername] = useState();
  const[password,setPassword] = useState();
  const[confirmPassword,setConfirmPassword]=useState();
  const[user,setUser] = useState()
  const[enteredOtp,setEnteredOtp] = useState(false);

  const handleLogin = () => {
    if(!username) { alert('Enter an username'); return}
    if(!password) { alert('Enter a password'); return}
    
    // time to check
    //console.log(users)
    const tmp = users.filter((item)=>{return item.username==username})[0]
    console.log("tmp: " + JSON.stringify(tmp))
    if(!tmp) { 
      alert('No user found'); return
    }else{
      console.log(tmp.password)
      console.log(password)
      if(tmp.password==password){
        setUser(tmp)
        setTheOTP();
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        return;
      }else{
        alert('INCORRECT PASSWORD!')
        setUser()
      }
    }

  }

  function generateRandomNumber() {
    // Generate a random number between 100000 and 999999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    otp = randomNumber
    // Return the random number
    return randomNumber;
  }

  const setTheOTP = () =>{
    console.log(generateRandomNumber())
    alert(`YOUR OTP IS: ${otp}`)
  }
  
  const handleSignup = () => {
    if(!username) { alert('Enter an username'); return}
    if(!password) { alert('Enter a password'); return}
    if(!confirmPassword) { alert('Please confirm passowrd'); return}
    if(password!=confirmPassword) { alert('Passwords don\'t match'); return}

    // check if username in use
    setUser(users.filter((user) => {return user.username==username}))

    if(user) {
      alert('username already in use')
    }else{
      const newUser = {username:username, password:password}
    }

  }

  function verifyOTP(userOTP,otp,setEnteredOtp){
    console.log('otp:' + otp)
    console.log('userOTP:' + userOTP)
    if(otp==userOTP){
      setEnteredOtp(true);
      return alert('Succesfully logged in');
    }else{
      return alert('WRONG OTP')
    }
  }

  function OTPScreen({props}){
      const{enteredOtp,setEnteredOtp} = props
      const[userOTP,setUserOTP] = useState();
    return(
      <SafeAreaView>
        <View style={styles.child}>
            <Text style={{fontSize:20}}>OTP:</Text>
            <TextInput style={styles.TextInput} maxLength={4} keyboardType='numeric' value={userOTP} onChangeText={(value) => setUserOTP(value)} placeholder='Enter OTP' />
        </View>
        <Button title='Enter OTP' onPress={()=>{verifyOTP(userOTP,otp,setEnteredOtp)}}/>
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      {!user&&<Tab.Navigator>
        <Tab.Screen name="Login" options={{ 
          tabBarIcon: ({ color, size }) => (
            <CustomIconComponent color={color} size={size} name={'login'} />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle:{fontSize:24}
         }}>
          {() => <Login props={{ username,setUsername,password,setPassword,handleLogin }}/>}
         </Tab.Screen>
        <Tab.Screen name="Signup" options={{ 
          tabBarIcon: ({ color, size }) => (
            <CustomIconComponent color={color} size={size} name={'person-add'} />
          ),
         }}>
          {() => <Signup props={{ username,setUsername,password,setPassword,confirmPassword,setConfirmPassword,handleSignup }}/>}
         </Tab.Screen>
      </Tab.Navigator>}
      {user&&!enteredOtp&&<Tab.Navigator>
          <Tab.Screen name="Enter OTP">
            {() => <OTPScreen props={{ enteredOtp,setEnteredOtp }}/>}
          </Tab.Screen>
        </Tab.Navigator>}
      {user&&enteredOtp&&<Stack.Navigator>
        <Stack.Screen name='Accounts' component={Accounts} initialParams={{user,setUser,enteredOtp,setEnteredOtp}}/>
        <Stack.Screen name='Transactions' component={Transactions}/>
      </Stack.Navigator>}
    </NavigationContainer>
  );
}

{/* <Tab.Screen name="Add Product" options={{ 
          tabBarIcon: ({ color, size }) => (
            <CustomIconComponent color={color} size={size} name={'add'} />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle:{fontSize:24}
         }}>
          {() => <AddProduct props={{ products,setProducts,setUser }}/>}
        </Tab.Screen>
        <Tab.Screen name="Products List" options={{ 
          tabBarIcon: ({ color, size }) => (
            <CustomIconComponent color={color} size={size} name={'view-list'} />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle:{fontSize:24}
         }}>
          {() => <Products props={{products,setProducts}}/>}
        </Tab.Screen> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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