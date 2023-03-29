import React from 'react';
import {Context} from '../types';

const AuthContext = React.createContext<Context>({} as Context);

export default AuthContext;
