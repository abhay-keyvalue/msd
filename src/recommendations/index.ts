import { useState } from 'react';
import { apiCall } from 'src/api';
import { getFromStorage } from 'src/utils/storage';

export const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState<object>({});
  const getRecommendations = async (params: object) => {
    const apiKey = await getFromStorage('apiKey');
    console.log(apiKey);
    const result = await apiCall('products', params);
    setRecommendations(result || {});
  };

  return {
    getRecommendations,
    recommendations,
  };
};
