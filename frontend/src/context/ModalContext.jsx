// context/ModalContext.js
import React from 'react';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  const openRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const closeModals = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  return (
    <ModalContext.Provider value={{ loginOpen, registerOpen, openLogin, openRegister, closeModals }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
