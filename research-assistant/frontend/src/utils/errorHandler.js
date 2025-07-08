import axios from 'axios';

/**
 * Centralized error handler for the application
 * This helps avoid unhandled promise rejections that cause runtime errors
 */

/**
 * Handles API errors consistently across the application
 * @param {Error} error - The error to handle
 * @param {string} source - The source function that triggered the error
 * @param {Function} onError - Optional callback for additional error handling
 * @returns {Object} - A standardized error object
 */
export const handleApiError = (error, source = 'API', onError = null) => {
  // Skip logging for canceled requests
  if (axios.isCancel(error)) {
    return {
      success: false,
      canceled: true,
      message: 'Request was canceled',
      data: null
    };
  }

  // Handle different error types
  let errorMessage = 'An unknown error occurred';
  
  if (error.response) {
    // Server responded with an error status
    errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
    console.error(`${source} error:`, errorMessage);
  } else if (error.request) {
    // Request was made but no response received (network error)
    errorMessage = 'Network error - unable to connect to server';
    console.error(`${source} network error:`, error.message);
  } else {
    // Something happened in setting up the request
    errorMessage = error.message || 'Error setting up request';
    console.error(`${source} setup error:`, error.message);
  }

  // Call additional error handler if provided
  if (onError && typeof onError === 'function') {
    onError(errorMessage, error);
  }

  return {
    success: false,
    canceled: false,
    message: errorMessage,
    data: null,
    error
  };
};

/**
 * Global error handler for uncaught exceptions and unhandled rejections
 */
export const setupGlobalErrorHandlers = () => {
  // Handle uncaught exceptions
  window.addEventListener('error', (event) => {
    console.error('Uncaught exception:', event.error);
    // Return true to prevent default browser error handling
    return true;
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    // Check if it's a canceled Axios request
    if (axios.isCancel(event.reason)) {
      // Suppress error reporting for canceled requests
      event.preventDefault();
      console.log('Suppressed unhandled rejection for canceled request');
      return;
    }
    
    console.error('Unhandled promise rejection:', event.reason);
    // Return true to prevent default browser error handling
    return true;
  });
};

export default {
  handleApiError,
  setupGlobalErrorHandlers
}; 