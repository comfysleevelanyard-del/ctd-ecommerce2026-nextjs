import { auth0 } from "@/lib/auth0";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const Header = async () => {
  const session = await auth0.getSession();

  return (
    <ul className="flex align-items-center justify-between gap-4 p-4 border-b">
      <li>
        <Link className="text-gray-700" href="/">
          Home
        </Link>
      </li>
      {session?.user ? (
        <>
          <li>
            <a href="/auth/logout">Logout</a>
          </li>
          <li>
            <Link href={"/cart"}>Cart</Link>
          </li>
        </>
      ) : (
        <li>
          <a href="/auth/login">Sign In</a>
        </li>
      )}
    </ul>
  );
};

export default Header;
