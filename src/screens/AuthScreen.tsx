import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  Button, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { AxiosError } from 'axios';
import useAuthForm from '../hooks/useAuthForm';
import login from '../api/login';
import { useAuthContext } from '../context/AuthContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 16,
    justifyContent: 'center',
  },
  form: {},
  title: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  error: {
    color: '#f00',
    marginBottom: 16,
  },
  loading: {
    marginBottom: 16,
  },
});

const AuthScreen = () => {
  const { state, dispatch } = useAuthForm();
  const { setToken } = useAuthContext();

  const onSubmit = useCallback(() => {
    const { username, password } = state;
    dispatch({ type: 'setLoading', loading: true });
    login({ username, password })
      .then((response) => {
        dispatch({ type: 'success' });
        setToken(response.data.access_token);
      })
      .catch((reason: Error | AxiosError) => {
        dispatch({ type: 'failure', error: reason.message });
      })
      .finally(() => {
        dispatch({ type: 'setLoading', loading: false });
      });
  }, [dispatch, setToken, state]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Логин:</Text>
        <TextInput
          placeholder="qwe"
          style={styles.input}
          value={state.username}
          onChangeText={(value) => dispatch({
            type: 'onChangeText',
            field: 'username',
            value,
          })}
        />

        <Text style={styles.title}>Пароль:</Text>
        <TextInput
          placeholder="123"
          style={styles.input}
          textContentType="password"
          value={state.password}
          onChangeText={(value) => dispatch({
            type: 'onChangeText',
            field: 'password',
            value,
          })}
        />

        {!!state.error && (
          <Text style={styles.error}>
            {'Не удалось выполнить вход:\n'}
            {state.error}
          </Text>
        )}

        {state.loading && <ActivityIndicator style={styles.loading} />}

        <Button
          title="Войти"
          disabled={!state.password || !state.username || state.loading}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default AuthScreen;
