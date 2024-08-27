// services/apiServices.ts
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:7654';

interface UserData {
  gpnID: number;
  ergoUserName:string;
  ergoUserEmail: string;
  ergoUserPassword: string;
  ergoUserDesignation: string;
  isCustomized: boolean;
  ergoUserLocation: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
  user: { name: string; email: string };
}

export const createUser = async (userData: UserData): Promise<AxiosResponse<void>> => {
  return await axios.post(`${API_BASE_URL}/ergoBuddy/createUser`, userData);
};

export const loginUser = async (credentials: SignInCredentials): Promise<AxiosResponse<SignInResponse>> => {
  return await axios.post(`${API_BASE_URL}/signin`, credentials);
};

export const fetchUserDetails = async (token: string): Promise<AxiosResponse<any>> => {
  return await axios.get(`${API_BASE_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
