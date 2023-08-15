export function Header() {
  return (
    <header className="">
      <nav className="relative">
        <img
          src="./assets/nike-logo.png"
          alt=""
          className="absolute right-1/2 left-1/2 -translate-x-1/2"
        />
        <ul className="hidden md:flex justify-between gap-4 w-full text-sm">
          <li className="">
            <a href="#nike">NIKE</a>
          </li>
          <div className="flex gap-4">
            <li>
              <a href="#nike">ABOUT</a>
            </li>
            <li>
              <a href="#nike">FAQ</a>
            </li>
            <li>
              <a href="#nike">CONTACT</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
