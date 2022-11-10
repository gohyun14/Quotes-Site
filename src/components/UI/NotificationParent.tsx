import React from 'react';
import { useAtom } from 'jotai';
import { notificationsAtom } from '../../state/atoms/notificationAtom';
import Notification from './Notification';

// const [notification, setNotification] = useAtom(notificationAtom);
//   const [show, setShow] = useState<boolean>(false);

//   useEffect(() => {
//     if (notification !== null) {
//       setShow(true);
//     }
//     const timerId = setTimeout(() => {
//       // set show false first then remove notification so it doesn't render an empty notif for a second
//       setShow(false);
//       setTimeout(() => {
//         setNotification((notifications) => notifications.slice(1));
//       }, 1000);
//     }, 2500);

//     return () => clearTimeout(timerId);
//   }, [notification, setNotification]);

const NotificationParent = () => {
  const [notifications, setNotifications] = useAtom(notificationsAtom);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:py-16 sm:px-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationParent;
