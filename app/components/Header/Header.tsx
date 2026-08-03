import Logo from "./Logo";
import SearchBar from "./searchBar";
import Checkout from "./Checkout";
export default function Header() {
  return (
    <header className="bg-gray-900 p-4 text-white flex justify-between items-center ">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-1">
        <SearchBar />
      </div>
      <div className="flex-1 flex justify-end">
        <Checkout/>
      </div>
    </header>
  );
}
