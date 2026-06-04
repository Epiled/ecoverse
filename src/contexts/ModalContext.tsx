import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onModal: (callback?: () => void) => void;
  offModal: (callback?: () => void) => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onModal = (callback?: () => void) => {
    setIsOpen(true);
    callback?.();
  };

  const offModal = (callback?: () => void) => {
    setIsOpen(false);
    callback?.();
  };

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, onModal, offModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider",
    );
  }

  return context;
};
