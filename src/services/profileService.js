import api from '../config/api';

export const profileService = {
  /**
   * Get user profile by user ID
   * @param {string} userId 
   */
  async getProfile(userId) {
    try {
      const response = await api.get(`/api/profiles/${userId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update user profile
   * @param {string} userId 
   * @param {object} profileData 
   */
  async updateProfile(userId, profileData) {
    try {
      const response = await api.put(`/api/profiles/${userId}`, profileData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get current user's profile
   */
  async getCurrentUserProfile() {
    try {
      const authService = require('./authService').default;
      const user = await authService.getCurrentUser();
      
      if (!user || !user.id) {
        throw new Error('User not authenticated');
      }

      return await this.getProfile(user.id);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update current user's profile
   * @param {object} profileData 
   */
  async updateCurrentUserProfile(profileData) {
    try {
      const authService = require('./authService').default;
      const user = await authService.getCurrentUser();
      
      if (!user || !user.id) {
        throw new Error('User not authenticated');
      }

      return await this.updateProfile(user.id, profileData);
    } catch (error) {
      throw error;
    }
  },
};

export default profileService;
