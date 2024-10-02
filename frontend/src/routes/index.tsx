import { SignedIn, SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Home from "../components/Home";

export default function IndexPage() {
  const { user } = useUser();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignedIn>
        <Home />
      </SignedIn>
      <SignIn />
    </div>
  );
}
