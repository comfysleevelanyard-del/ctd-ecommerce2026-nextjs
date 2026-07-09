"use client";

import { useUser } from "@auth0/nextjs-auth0";

const getUserData = () => {
  const session = useUser()?.user?.sub;
  console.log(session);

  return <div>session</div>;
};

export default getUserData;
