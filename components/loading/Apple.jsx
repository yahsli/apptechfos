import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const Apple = ({ size, color }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { lineSpinner } = require('ldrs'); // Only require 'ldrs' on the client
      lineSpinner.register(); // Register the spinner only on the client side
    }
  }, []);

  if (typeof window === 'undefined') {
    // Render nothing on the server
    return null;
  }

  return (
    <l-line-spinner
      size={size}
      stroke="3"
      speed="1"
      color={color}
    ></l-line-spinner>
  );
};

// Ensure dynamic import to disable SSR
export default dynamic(() => Promise.resolve(Apple), { ssr: false });
