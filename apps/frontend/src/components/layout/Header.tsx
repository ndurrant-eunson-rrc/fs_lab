import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <header>
        <img src= { logo } alt = "Pixell River Financial" />
            <div>
            <h1>Pixell River Employee Directory </h1>
                < p > Welcome! This is our talented team across all departments.</p>
                    </div>
                    <div className="header-auth">
                <SignedOut>
                    <SignInButton mode="modal" />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
                    </header>
  );
}