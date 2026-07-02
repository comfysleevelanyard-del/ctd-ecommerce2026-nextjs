import { auth0 } from "@/lib/auth0";
import Link from "next/link";

const Header = async () => {
  const session = await auth0.getSession();

  return (
    <ul className="flex align-items-center justify-between gap-4 p-4 border-b-1">
      <li>
        <Link className="text-gray-700" href="/">
          Home
        </Link>
      </li>
      <li>
        {session?.user ? (
          <a href="/">Profile</a>
        ) : (
          <a href="/auth/login">Sign In</a>
        )}
      </li>
    </ul>
  );
};

export default Header;
