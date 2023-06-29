import Image from "next/image";
import React from "react";

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
