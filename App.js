import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './components/SplashScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import LandScreen from './screens/LandScreen';
import TabNavigator from './navigation/TabNavigator';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash Screen'>
        {/* <Stack.Screen options={{ headerShown: false }} name="Splash Screen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name="NewPassword" component={NewPasswordScreen} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> 
        {/* <Stack.Screen options={{ headerShown: false }} name="Land" component={LandScreen} /> */}
      </Stack.Navigator>
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
}