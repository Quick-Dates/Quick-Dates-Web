/* eslint-disable react/prop-types */
import React from 'react';

import { AuthProvider } from './AuthContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

export default AppProvider;
