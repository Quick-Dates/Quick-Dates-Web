import React, {
  createContext, useState, useContext,
  useCallback,
} from 'react';
import Lottie from 'react-lottie';
import animationFile from '../assets/calendar-animation.json';

interface LoadingContextData {
  isLoding: boolean;
  handleSetIsLoading(isLoading: boolean): void;
}

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoding, setIsLoding] = useState<boolean>(false);

  const handleSetIsLoading = useCallback((value: boolean) => { setIsLoding(value); }, []);

  const optionsAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationFile,
  };

  return (
    <LoadingContext.Provider value={{ isLoding, handleSetIsLoading }}>
      {children}
      {isLoding && (
      <div className="contentAnimation">
        <Lottie
          options={optionsAnimation}
          height={400}
          width={400}
        />
      </div>
      )}
    </LoadingContext.Provider>
  );
};

export function useContextLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useContextLoading must be used within an LoadingProvider');
  }
  return context;
}
