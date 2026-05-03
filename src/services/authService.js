import api from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authService = {
  /**
   * Sign up new user
   * @param {string} email 
   * @param {string} password 
   * @param {object} userData - Additional user data (full_name, role, etc.)
   */
  async signUp(email, password, userData = {}) {
    try {
      const response = await api.post('/api/auth/signup', {
        email,
        password,
        userData: {
          ...userData,
          role: userData.role || 'candidate', // Default to candidate
        },
      });

      if (response.success && response.data?.session) {
        // Save token and user data
        await AsyncStorage.setItem('access_token', response.data.session.access_token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      }

      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Sign in existing user
   * @param {string} email 
   * @param {string} password 
   */
  async signIn(email, password) {
    try {
      const response = await api.post('/api/auth/signin', {
        email,
        password,
      });

      if (response.success && response.data?.session) {
        // Save token and user data
        await AsyncStorage.setItem('access_token', response.data.session.access_token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      }

      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Sign out current user
   */
  async signOut() {
    try {
      await api.post('/api/auth/signout');
    } catch (error) {
      console.error('Sign out API error:', error);
    } finally {
      // Always clear local storage
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('user');
    }
  },

  /**
   * Get current user from storage
   */
  async getCurrentUser() {
    try {
      const userStr = await AsyncStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  /**
   * Check if user is authenticated
   */
  async isAuthenticated() {
    try {
      const token = await AsyncStorage.getItem('access_token');
      return !!token;
    } catch (error) {
      return false;
    }
  },

  /**
   * Get access token
   */
  async getToken() {
    try {
      return await AsyncStorage.getItem('access_token');
    } catch (error) {
      return null;
    }
  },
};

export default authService;
