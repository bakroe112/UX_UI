import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// Create Supabase client with anon key (for general operations)
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Create Supabase admin client with service role key (for admin operations)
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

/**
 * Helper function to handle Supabase errors
 */
export const handleSupabaseError = (error) => {
  console.error('Supabase Error:', error);
  
  return {
    success: false,
    message: error.message || 'Database operation failed',
    code: error.code
  };
};

/**
 * Helper function to upload file to Supabase Storage
 */
export const uploadFile = async (bucket, path, file, options = {}) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, options);

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);

    return {
      success: true,
      data: {
        path: data.path,
        publicUrl
      }
    };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

/**
 * Helper function to delete file from Supabase Storage
 */
export const deleteFile = async (bucket, path) => {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) throw error;

    return {
      success: true,
      message: 'File deleted successfully'
    };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

/**
 * Helper function to get signed URL for private files
 */
export const getSignedUrl = async (bucket, path, expiresIn = 3600) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(path, expiresIn);

    if (error) throw error;

    return {
      success: true,
      data: {
        signedUrl: data.signedUrl
      }
    };
  } catch (error) {
    return handleSupabaseError(error);
  }
};

export default supabase;
