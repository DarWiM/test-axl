/* eslint-disable react/no-unused-state */
import React, { PropsWithChildren, useContext } from 'react';

type AuthContextProps = PropsWithChildren;

export type AuthContextState = {
  token: string | null;
  setToken: (token: string | null) => void;
};

const defaultState: AuthContextState = {
  token: null,
  setToken: () => {},
};

const AuthContext = React.createContext<AuthContextState>(defaultState);

export default AuthContext;

export class AuthContextProvider extends React.Component<AuthContextProps, AuthContextState> {
  constructor(props: AuthContextProps) {
    super(props);

    this.state = {
      ...defaultState,
      setToken: this.setToken,
    };
  }

  setToken: AuthContextState['setToken'] = (token) => {
    this.setState({
      token,
    });
  };

  render() {
    return <AuthContext.Provider {...this.props} value={this.state} />;
  }
}

export const useAuthContext = () => useContext(AuthContext);
