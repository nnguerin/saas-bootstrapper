import { Link } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/tanstack-react-start";
import { Button } from "../ui/button";
import MainNavigation from "./MainNavigation";

export default function Header() {
  return (
    <>
      <header className="p-4 flex items-center bg-white text-gray-800 shadow-lg">
        <MainNavigation />
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">
            <img
              src="/fast-saas-word-logo-white.svg"
              alt="Fast Saas Logo"
              className="h-10"
            />
          </Link>
        </h1>
        <div className="ml-auto">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button>
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </header>
    </>
  );
}
