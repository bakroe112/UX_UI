import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { jobService, applicationService } from '../../services';

/**
 * Example screen demonstrating API integration
 * This shows how to use the services in your screens
 */
const ApiExample = ({ navigation }: any) => {
  const { user, isAuthenticated, signIn, signOut } = useAuth();
  
  // State for authentication
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // State for jobs
  const [jobs, setJobs] = useState<any[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load jobs on mount
  useEffect(() => {
    loadJobs();
  }, []);

  // Load jobs from API
  const loadJobs = async () => {
    try {
      setJobsLoading(true);
      const response = await jobService.getJobs({
        page: 1,
        limit: 10,
        search: searchQuery,
      });

      if (response.success) {
        setJobs(response.data);
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to load jobs');
    } finally {
      setJobsLoading(false);
    }
  };

  // Handle sign in
  const handleSignIn = async () => {
    try {
      setAuthLoading(true);
      await signIn(email, password);
      Alert.alert('Success', 'Signed in successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Sign in failed');
    } finally {
      setAuthLoading(false);
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      Alert.alert('Success', 'Signed out successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Sign out failed');
    }
  };

  // Handle job application
  const handleApply = async (jobId: string) => {
    if (!isAuthenticated) {
      Alert.alert('Error', 'Please sign in to apply');
      return;
    }

    try {
      const response = await applicationService.submitApplication({
        job_id: jobId,
        user_id: user.id,
        resume_url: 'https://example.com/resume.pdf',
        cover_letter: 'I am interested in this position...',
      });

      if (response.success) {
        Alert.alert('Success', 'Application submitted successfully!');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to submit application');
    }
  };

  // Render job item
  const renderJob = ({ item }: any) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
      <Text style={styles.jobType}>{item.job_type}</Text>
      
      {item.salary_min && item.salary_max && (
        <Text style={styles.jobSalary}>
          {item.salary_min.toLocaleString()} - {item.salary_max.toLocaleString()} VND
        </Text>
      )}

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => handleApply(item.id)}
      >
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Authentication Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authentication</Text>
        
        {!isAuthenticated ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignIn}
              disabled={authLoading}
            >
              {authLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Sign In</Text>
              )}
            </TouchableOpacity>
          </>
        ) : (
          <View>
            <Text style={styles.userInfo}>
              Signed in as: {user?.email}
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.signOutButton]}
              onPress={handleSignOut}
            >
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Jobs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jobs</Text>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search jobs..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={loadJobs}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {jobsLoading ? (
          <ActivityIndicator size="large" color="#3B82F6" />
        ) : (
          <FlatList
            data={jobs}
            renderItem={renderJob}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No jobs found</Text>
            }
            refreshing={jobsLoading}
            onRefresh={loadJobs}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signOutButton: {
    backgroundColor: '#EF4444',
    marginTop: 8,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  searchButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    minWidth: 80,
    alignItems: 'center',
  },
  jobCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  jobLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  jobType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  jobSalary: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '600',
    marginBottom: 12,
  },
  applyButton: {
    backgroundColor: '#10B981',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
});

export default ApiExample;
