import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignUpBuyerScreen from './screens/SignUpBuyerScreen';
import SplashScreen from './components/SplashScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import LandScreen from './screens/LandScreen';
import TabNavigator from './navigation/TabNavigator';
import BookDetailsScreen from './screens/BookDetailsScreen';
import SuggestionScreen from './screens/SuggestionScreen';
import ProfileScreen from './screens/ProfileScreen';
import TermsAndPrivacyScreen from './screens/TermsAndPrivacyScreen'
import HelpScreen from './screens/HelpScreen'


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash Screen'>
        <Stack.Screen options={{ headerShown: false }} name="Splash Screen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Land" component={LandScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUpBuyer" component={SignUpBuyerScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={TabNavigator} />  
        <Stack.Screen options={{ headerShown: false }} name="BookDetails" component={BookDetailsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Suggestions" component={SuggestionScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TermsAndPrivacy" component={TermsAndPrivacyScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Help" component={HelpScreen} />
      </Stack.Navigator>
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
}