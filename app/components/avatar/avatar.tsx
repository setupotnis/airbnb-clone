"use client";
import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpeg"}
    />
  );
};

export default avatar;
