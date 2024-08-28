export const validateURL = (url: string): { isValid: boolean; errorMessage?: string } => {

    let parsedURL: URL
  
    try {
      parsedURL = new URL(url)
    } catch (e) {
      return { isValid: false, errorMessage: "Invalid URL format" }
    }
  
    if (!['http:', 'https:'].includes(parsedURL.protocol)) {
      return { isValid: false, errorMessage: "URL must use HTTP or HTTPS" }
    }
  
    const hostnameParts = parsedURL.hostname.split('.')
    if (hostnameParts.length < 2 || hostnameParts[hostnameParts.length - 1].length < 2) {
      return { isValid: false, errorMessage: "URL must have a valid Top-Level Domain" }
    }
  
    return { isValid: true }
  }