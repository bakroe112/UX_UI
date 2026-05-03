import api from '../config/api';

export const applicationService = {
  /**
   * Get all applications with optional filters
   * @param {object} params - Query parameters (userId, jobId, status)
   */
  async getApplications(params = {}) {
    try {
      const { userId, jobId, status } = params;

      const queryParams = new URLSearchParams({
        ...(userId && { userId }),
        ...(jobId && { jobId }),
        ...(status && { status }),
      });

      const queryString = queryParams.toString();
      const url = queryString ? `/api/applications?${queryString}` : '/api/applications';

      const response = await api.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get application by ID
   * @param {string} applicationId 
   */
  async getApplicationById(applicationId) {
    try {
      const response = await api.get(`/api/applications/${applicationId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Submit new application
   * @param {object} applicationData 
   */
  async submitApplication(applicationData) {
    try {
      const response = await api.post('/api/applications', applicationData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update application status
   * @param {string} applicationId 
   * @param {string} status - pending, screening, interview, offer, accepted, rejected, withdrawn
   */
  async updateApplicationStatus(applicationId, status) {
    try {
      const response = await api.patch(`/api/applications/${applicationId}/status`, {
        status,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get user's applications
   * @param {string} userId 
   */
  async getUserApplications(userId) {
    try {
      return await this.getApplications({ userId });
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get applications for a specific job
   * @param {string} jobId 
   */
  async getJobApplications(jobId) {
    try {
      return await this.getApplications({ jobId });
    } catch (error) {
      throw error;
    }
  },
};

export default applicationService;
