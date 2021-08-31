/* eslint-disable react/prop-types */
import React from 'react';

import { AuthProvider } from './AuthContext';
import { LoadingProvider } from './LoadingContext';

const AppProvider: React.FC = ({ children }) => (
  <LoadingProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </LoadingProvider>
);

export default AppProvider;
