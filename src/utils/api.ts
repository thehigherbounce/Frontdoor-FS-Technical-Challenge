const API_BASE_URL = 'http://localhost:3001';

export const apiRequest = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' = 'GET',
  data?: any
): Promise<any> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const init: RequestInit = {
    method,
    headers,
  };

  if (data) {
    init.body = JSON.stringify(data);
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, init);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
};
