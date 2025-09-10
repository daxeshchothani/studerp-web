import { useEffect } from 'react';
import { setPageMeta } from '../utils/seo';

export const usePageMeta = (title, description, keywords = '') => {
  useEffect(() => {
    setPageMeta(title, description, keywords);
  }, [title, description, keywords]);
};
