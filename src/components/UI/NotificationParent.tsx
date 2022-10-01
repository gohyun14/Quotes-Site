import React from 'react';

type NotificationParentProps = {
  children: React.ReactNode;
};

const NotificationParent = ({ children }: NotificationParentProps) => {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:py-16 sm:px-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {children}
      </div>
    </div>
  );
};

export default NotificationParent;
