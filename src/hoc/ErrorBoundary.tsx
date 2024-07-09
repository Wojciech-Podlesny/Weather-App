import { useState, useEffect, ReactNode, FC } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      console.error("ErrorBoundary caught an error", event.error);
    };

    window.addEventListener('error', handleError);

    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return <>{children}</>;
};

export { ErrorBoundary };
