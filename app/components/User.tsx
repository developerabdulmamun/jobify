"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface Props {
  session: Session;
}

const User = ({ session }: Props) => {
  return (
    <div
      onClick={() => {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup` });
      }}
      className="cursor-pointer"
    >
      <Image
        src={`${session?.user?.image}`}
        alt="logo"
        height={50}
        width={50}
        className="rounded-full"
      />
    </div>
  );
};

export default User;
