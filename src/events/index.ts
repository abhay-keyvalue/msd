import { apiCall } from 'src/api';
import { getFromStorage } from 'src/utils/storage';

export const useEvents = () => {
  const track = async (eventName: string, params: object) => {
    const apiKey = await getFromStorage('apiKey');
    console.log(eventName, apiKey);
    await apiCall('categories', params);
  };
  return {
    track,
  };
};
