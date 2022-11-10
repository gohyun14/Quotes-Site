/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useSetAtom } from 'jotai';
import {
  notificationsAtom,
  NotificationAtomType,
} from '../../state/atoms/notificationAtom';

type NotificationProps = {
  notification: NotificationAtomType;
};

const Notification = ({ notification }: NotificationProps) => {
  const setNotifications = useSetAtom(notificationsAtom);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
    // const timerId = setTimeout(() => {
    //   setShow(false);
    //   setTimeout(() => {
    //     setNotifications((notifications) => notifications.slice(1));
    //   }, 1000);
    // }, 3500);

    // return () => clearTimeout(timerId);
  }, [setNotifications]);

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-in duration-200 transition"
      enterFrom="opacity-0 translate-x-full sm:translate-y-0 sm:translate-x-full"
      enterTo="opacity-100 translate-x-0 sm:translate-x-0"
      leave="transition ease-in duration-200"
      leaveFrom="translate-x-0 opacity-100"
      leaveTo="translate-x-full opacity-0"
    >
      <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-6 w-6 text-indigo-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">
                {notification && notification.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {notification && notification.message}
              </p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setShow(false)}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Notification;
