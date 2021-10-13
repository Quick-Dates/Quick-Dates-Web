import api from './api';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { IUser } from '../Context/AuthContext';

interface IDataSignin {
  username: string;
  password: string;
  token?: string;
}
class AuthService {
  async signin(data: IDataSignin, profile: 'students' | 'teachers') {
    try {
      const response = await api.post(`/${profile}/signin`, data);
      return response.data;
    } catch (error: any) {
      toast.error(error.response ? error.response.data.message : 'Erro ao fazer login');
    }
  }

  getUserToken(token: string): IUser | undefined {
    return token ? jwtDecode(token) : undefined;
  }
}

export default AuthService;
