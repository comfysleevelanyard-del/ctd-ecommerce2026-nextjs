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
    <ul className="flex align-items-center justify-between gap-4 p-4 border-b-1">
      <li>
        <Link className="text-gray-700" href="/">
          Home
        </Link>
      </li>
      <li>
        {session?.user ? (
          <HoverCard>
            <HoverCardTrigger>
              <Link href="/">Profile</Link>
            </HoverCardTrigger>
            <HoverCardContent>
              <ul className="flex flex-col gap-2 items-center">
                <li>
                  <p>Welcome, {session.user.name}!</p>
                </li>
                <li>
                  <Link href={"/start"} className="hover:underline">
                    Become a Retailer
                  </Link>
                </li>
              </ul>
            </HoverCardContent>
          </HoverCard>
        ) : (
          <a href="/auth/login">Sign In</a>
        )}
      </li>
    </ul>
  );
};

export default Header;
