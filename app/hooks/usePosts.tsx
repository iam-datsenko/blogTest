import {useCallback, useEffect, useState} from 'react';
import {getBlogData} from '../api/posts';
import {Post} from '../types';

export const usePosts = () => {
  const [blogData, setBlogData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  console.log(page);

  useEffect(() => {
    let active = true;

    const getData = async () => {
      setIsLoading(true);

      try {
        if (active) {
          const data = await getBlogData(page);
          setBlogData(prevData => [...prevData, ...data]);
          // setBlogData([...blogData, ...data]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      active = false;
    };
  }, [page]);

  const loadMoreData = useCallback(() => {
    if (!isLoading) {
      setPage(page + 1);
    }
  }, [isLoading, page]);

  const refreshData = useCallback(async () => {
    try {
      setIsRefreshing(true);

      const data = await getBlogData(1);
      setBlogData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  return {blogData, isLoading, isRefreshing, loadMoreData, refreshData};
};
