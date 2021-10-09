import api from './api';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

interface IDataSignin {
  username: string;
  password: string;
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

  getUserToken(token: string) {
    return jwtDecode(token);
  }
}

export default AuthService;
