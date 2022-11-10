import { atom } from 'jotai';

export type NotificationAtomType = {
  title: string;
  message: string;
};

export const notificationsAtom = atom<NotificationAtomType[]>([]);
