import {BASE_URL} from '@env';

import {Post} from '../types';

class ApiSDK {
  static getPosts(page: number) {
    return this.get<Post[]>('/posts/', {page});
  }

  static getPost(id: number) {
    return this.get<Post>(`/posts/${id}`);
  }

  static get<T = any>(
    endpoint: string,
    params?: Record<string, string | number | Array<string>>,
  ): Promise<T> {
    return this.request(endpoint, 'GET', {...params});
  }

  static async request(
    endpoint: string,
    method: string,
    params?: Record<string, string | number | Array<string>>,
  ) {
    const url = new URL(`${BASE_URL}${endpoint}`);
    let options = {
      method,
    };

    if (params && method.toUpperCase() === 'GET') {
      Object.keys(params).forEach(param => {
        let value = params[param];

        url.searchParams.append(params, value.toString());
      });
    }

    try {
      const res = await fetch(url.href, options);

      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default ApiSDK;
