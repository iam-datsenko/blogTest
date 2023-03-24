import {useCallback, useEffect, useState} from 'react';
import ApiSDK from '../api/posts';
import {Post} from '../types';

export const usePosts = () => {
  const [blogData, setBlogData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // console.log(blogData[0]?.slug);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        console.log(page);

        const data = await ApiSDK.getPosts(page);
        // setBlogData(prevData => [...prevData, ...data]);
        setBlogData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page]);

  const loadMoreData = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const refreshData = useCallback(async () => {
    setBlogData([]);
    setPage(2);

    try {
      setIsRefreshing(true);

      const data = await ApiSDK.getPosts(page);
      setBlogData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  }, [page]);

  return {blogData, isLoading, isRefreshing, loadMoreData, refreshData};
};
