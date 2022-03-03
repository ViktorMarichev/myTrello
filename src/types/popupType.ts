import React from 'react';
export type StyledPopupProps = {
  display: string;
};
export type modalProps = {
  title: string;
  display: string;
  setUserName: (username: string) => void;
};
export type popupProps = {
  display: boolean;
  children: React.ReactNode;
  onClose: () => void;
};
