import api from '../config/api';

export const jobService = {
  /**
   * Get all jobs with optional filters
   * @param {object} params - Query parameters (page, limit, search, location, type)
   */
  async getJobs(params = {}) {
    try {
      const { page = 1, limit = 10, search, location, type } = params;

      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(search && { search }),
        ...(location && { location }),
        ...(type && { type }),
      });

      const response = await api.get(`/api/jobs?${queryParams.toString()}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get job by ID
   * @param {string} jobId 
   */
  async getJobById(jobId) {
    try {
      const response = await api.get(`/api/jobs/${jobId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create new job (Recruiter only)
   * @param {object} jobData 
   */
  async createJob(jobData) {
    try {
      const response = await api.post('/api/jobs', jobData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update existing job
   * @param {string} jobId 
   * @param {object} jobData 
   */
  async updateJob(jobId, jobData) {
    try {
      const response = await api.put(`/api/jobs/${jobId}`, jobData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete job
   * @param {string} jobId 
   */
  async deleteJob(jobId) {
    try {
      const response = await api.delete(`/api/jobs/${jobId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Search jobs with advanced filters
   * @param {object} filters 
   */
  async searchJobs(filters = {}) {
    try {
      const response = await this.getJobs(filters);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default jobService;
