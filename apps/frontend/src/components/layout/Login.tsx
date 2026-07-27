import { SignInButton } from "@clerk/clerk-react";
import "./login.css";
 
export default function LoginPrompt() {
    return (
        <section className="login-prompt">
            <p>You must be logged in to add entries.</p>
            <SignInButton />
        </section>
    );
}