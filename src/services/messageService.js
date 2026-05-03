import api from '../config/api';

export const messageService = {
  /**
   * Get all conversations for a user
   * @param {string} userId 
   */
  async getConversations(userId) {
    try {
      const response = await api.get(`/api/messages/conversations?userId=${userId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get messages in a conversation
   * @param {string} conversationId 
   */
  async getMessages(conversationId) {
    try {
      const response = await api.get(`/api/messages/${conversationId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Send a message
   * @param {object} messageData - { conversation_id, sender_id, content }
   */
  async sendMessage(messageData) {
    try {
      const response = await api.post('/api/messages', messageData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get current user's conversations
   */
  async getCurrentUserConversations() {
    try {
      const authService = require('./authService').default;
      const user = await authService.getCurrentUser();
      
      if (!user || !user.id) {
        throw new Error('User not authenticated');
      }

      return await this.getConversations(user.id);
    } catch (error) {
      throw error;
    }
  },
};

export default messageService;
