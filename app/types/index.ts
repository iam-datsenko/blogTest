export type Post = {
  slug: string;
  date_gmt: string;
  featured_image: string;
  content: {
    rendered: string;
  };
  yoast_head_json: {
    author: string;
    og_title: string;
    og_description: string;
    og_image: [
      {
        url: string;
      },
    ];
  };
};

export type RootStackParamList = {
  Post: {data: Post | null};
  Home: undefined;
};

export type Params = {
  page?: number;
};

export type User = {
  name: string | null | undefined;
  id: string | null | undefined;
  email: string | null | undefined;
};

export type Context = {
  user: User | undefined;
  setUser: (user: User) => void;
  signInGoogle: () => void;
  signInFacebook: () => void;
};
