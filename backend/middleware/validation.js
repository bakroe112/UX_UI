/**
 * Validation middleware for request data
 */

export const validateJobCreation = (req, res, next) => {
  const { title, description, job_type, location } = req.body;

  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (!description || description.trim().length === 0) {
    errors.push('Description is required');
  }

  if (!job_type) {
    errors.push('Job type is required');
  } else if (!['full-time', 'part-time', 'contract', 'internship', 'remote'].includes(job_type)) {
    errors.push('Invalid job type');
  }

  if (!location || location.trim().length === 0) {
    errors.push('Location is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

export const validateApplicationSubmission = (req, res, next) => {
  const { job_id, user_id } = req.body;

  const errors = [];

  if (!job_id) {
    errors.push('Job ID is required');
  }

  if (!user_id) {
    errors.push('User ID is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

export const validateSignup = (req, res, next) => {
  const { email, password } = req.body;

  const errors = [];

  if (!email || !email.includes('@')) {
    errors.push('Valid email is required');
  }

  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

export const validatePagination = (req, res, next) => {
  const { page, limit } = req.query;

  if (page && (isNaN(page) || parseInt(page) < 1)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid page number'
    });
  }

  if (limit && (isNaN(limit) || parseInt(limit) < 1 || parseInt(limit) > 100)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid limit (must be between 1 and 100)'
    });
  }

  next();
};
