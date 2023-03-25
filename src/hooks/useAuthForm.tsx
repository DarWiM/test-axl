import { useReducer } from 'react';

type FormState = {
  username: string;
  password: string;
  error: string | null;
  loading: boolean;
};

const initialFormState: FormState = {
  username: '',
  password: '',
  error: null,
  loading: false,
};

type Action =
    | { type: 'success' }
    | { type: 'failure'; error: string }
    | { type: 'onChangeText'; field: 'username' | 'password'; value: string }
    | { type: 'setLoading'; loading: boolean };

const useAuthForm = () => {
  const [state, dispatch] = useReducer((prevState: FormState, action: Action) => {
    switch (action.type) {
      case 'onChangeText':
        return {
          ...prevState,
          [action.field]: action.value,
        };
      case 'success':
        return {
          ...prevState,
          error: initialFormState.error,
          password: initialFormState.password,
        };
      case 'failure':
        return {
          ...prevState,
          error: action.error,
        };
      case 'setLoading':
        return {
          ...prevState,
          loading: action.loading,
        };
      default:
        return prevState;
    }
  }, initialFormState);
  return { state, dispatch };
};

export default useAuthForm;
