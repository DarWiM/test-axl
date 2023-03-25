import { Button } from 'react-native';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const LogoutButton = () => {
  const { setToken } = useAuthContext();
  return (
    <Button
      onPress={() => setToken(null)}
      title="Выйти"
    />
  );
};

export default LogoutButton;
