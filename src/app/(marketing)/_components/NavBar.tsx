import { BrandLogo } from "@/components/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="flex py-6 fixed top-0 w-full z-10 bg-background/70 backdrop-blur">
      <nav className="flex items-center gap-10 px-5 md:px-20 justify-between w-full">
        <Link href="/" className="font-semibold">
          <BrandLogo />
        </Link>
        <div className="nav-links md:flex items-center gap-6 hidden">
          <Link className="text-lg" href="#">
            Features
          </Link>
          <Link className="text-lg" href="/#pricing">
            Pricing
          </Link>
          <Link className="text-lg" href="#">
            About
          </Link>
        </div>
        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <span className="flex items-center gap-1">
              <SignInButton>
                <span className="flex items-center gap-2 hover:cursor-pointer">
                  <span className="border border-black rounded-full p-1">
                    <User />
                  </span>
                  <span className="hidden md:inline-flex">Sign in</span>
                </span>
              </SignInButton>
            </span>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}
