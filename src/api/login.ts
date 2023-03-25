import axios from 'axios';
import Constants from 'expo-constants';

const rapidApiKey = Constants.expoConfig?.extra?.rapidApiKey || null;
const rapidApiHost = Constants.expoConfig?.extra?.rapidApiHost || null;

type Params = {
  username: string;
  password: string;
};

type Result = {
  access_token: string;
};

const login = ({ username, password }: Params) => axios.request<Result>({
  method: 'POST',
  url: `https://${rapidApiHost}/auth/login`,
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': rapidApiHost,
  },
  data: { username, password },
});

export default login;
