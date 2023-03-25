import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from '../context/AuthContext';
import MainScreen from '../screens/MainScreen';
import AuthScreen from '../screens/AuthScreen';
import LogoutButton from './LogoutButton';

const Stack = createNativeStackNavigator();

const NavigationRoot: FunctionComponent = () => {
  const { token } = useAuthContext();
  const isAuth = !!token;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              title: 'Смотрим google',
              headerRight: LogoutButton,
            }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ title: 'Авторизация' }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
