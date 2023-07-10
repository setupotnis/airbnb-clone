"use client";
import { User } from "@prisma/client";
import { Logo, Search, UserMenu } from ".";
import Container from "../container";

interface NavBarProps {
  currentUser?: User | null;
}

const navbar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default navbar;
