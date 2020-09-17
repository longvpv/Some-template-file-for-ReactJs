import { Cookies } from 'react-cookie';
import authenticateSettings from '../fileSettings/authenticateSettings.json';


class AuthorizationService {
  setCookies(authToken: string, refreshToken: string) {
    const cookies = new Cookies();
    cookies.set(authenticateSettings.tokenName, authToken, {
      path: '/',
      maxAge: 1000 * 3600 * 24 * 30 * 2
    });

    cookies.set(authenticateSettings.refreshToken, refreshToken, {
      path: '/',
      maxAge: 1000 * 3600 * 24 * 30 * 2
    });
  }

  logout() {
    const cookies = new Cookies();
    cookies.remove(authenticateSettings.tokenName, {
      path: '/',
    });
    localStorage.removeItem('persist:.rosterspot.localstorage.app.key');
  }
}

export default new AuthorizationService();