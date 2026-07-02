const Header = () => {
  const tempIsloggedIn = true;

  return (
    <ul className="flex align-items-center justify-between gap-4 p-4 border-b-1">
      <li>
        <a className="text-gray-700" href="/">
          Home
        </a>
      </li>
      <li>
        {tempIsloggedIn ? (
          <a href="/profile">Profile</a>
        ) : (
          <a href="/sign-in">Sign In</a>
        )}
      </li>
    </ul>
  );
};

export default Header;
