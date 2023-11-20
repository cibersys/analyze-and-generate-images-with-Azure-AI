export const validateUrl = (url) => {
    try {
        // Validate type and contains spaces
        if (typeof url === 'string' && url.includes(' ')) {
          throw new Error('Invalid URL');
        }
  
        // Build URL based on parameter
        const urlInfo = new URL(url);
  
        // Validate protocol
        if (!['http:', 'https:'].includes(urlInfo.protocol)) {
          throw new Error('Invalid protocol');
        }
  
        // Validate host and origin
        if (urlInfo.host === '' && urlInfo.origin === 'null') {
          throw new Error('Invalid URL');
        }
  
        return true;
      } catch (error) {
        return false;
      }
}
