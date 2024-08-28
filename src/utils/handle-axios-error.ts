import axios from 'axios';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return {
        error: 'Failed to fetch the URL',
        status: error.response.status,
        statusText: error.response.statusText
      };
    } else if (error.request) {
      return {
        error: 'No response received from the server',
        message: error.message
      };
    } else {
      return {
        error: 'Error setting up the request',
        message: error.message
      };
    }
  } else {
    return {
      error: 'An unexpected error occurred',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};