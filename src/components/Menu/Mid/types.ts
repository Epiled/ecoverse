export interface MidProps {
  menuOpen: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handlerMobileMenu: () => void;
}
