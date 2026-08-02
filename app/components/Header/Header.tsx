import Logo from "./Logo";
import Navigation from "./Navigation";
import Checkout from "./Checkout";
export default function Header() {
  return (
    <header className="bg-gray-900 p-4 text-white flex justify-between items-center ">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-1">
        <Navigation />
      </div>
      <div className="flex-1 flex justify-end">
        <Checkout/>
      </div>
    </header>
  );
}
