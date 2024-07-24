import "./Header.css";
import { useTelegram } from "../../hooks/useTelegram";
import AlertButton from "../AlertButton/AlertButton";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <AlertButton onClick={onClose}>&#x2715;</AlertButton>
      <div className="">
        Wellcome <span className="font-bold underline">{user?.username}</span>
      </div>
    </div>
  );
};

export default Header;
