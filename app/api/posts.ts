const BASE_URL = 'https://umtalelab.com/wp-json';

export const getBlogData = async (page: number) => {
  const url = `${BASE_URL}/wp/v2/posts/?page=${page}`;

  const response = await fetch(url);

  return response.json();
};
