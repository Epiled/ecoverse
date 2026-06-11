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
  content: ReactNode | null;
  onModal: (content: ReactNode, callback?: () => void) => void;
  offModal: (callback?: () => void) => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const onModal = (newContent: ReactNode, callback?: () => void) => {
    setContent(newContent);
    setIsOpen(true);
    callback?.();
  };

  const offModal = (callback?: () => void) => {
    setIsOpen(false);
    setTimeout(() => setContent(null), 300);
    callback?.();
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, content, onModal, offModal }}
    >
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
