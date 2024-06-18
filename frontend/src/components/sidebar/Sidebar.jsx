import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="diver px-3 pt-1"></div>
      <Conversations />
    </div>
  );
};

export default Sidebar;
