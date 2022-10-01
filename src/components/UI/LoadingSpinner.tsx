import React from 'react';

const LoadingSpinner = () => {
  return (
    <>
      <div className="grid my-40 place-content-center">
        <div className="flex items-center gap-2 text-gray-500">
          <svg className="h-20 w-20 block rounded-full border-4 border-t-indigo-400 animate-spin"></svg>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
