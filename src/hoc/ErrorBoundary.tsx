import { useState, useEffect, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      setHasError(true);
      console.error("ErrorBoundary caught an error", e.error);
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
