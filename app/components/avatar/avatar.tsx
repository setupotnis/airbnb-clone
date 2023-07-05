"use client";
import Image from "next/image";

function avatar() {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpeg"
    />
  );
}

export default avatar;
