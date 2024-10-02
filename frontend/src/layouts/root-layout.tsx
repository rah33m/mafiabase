import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header">
        <Header />
      </header>
      <main>
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <aside className="w-1/5 p-4">
            <Sidebar />
          </aside>

          {/* Main Content (This is where the changing pages will render) */}
          <main className="flex-1  p-4">
            <Outlet /> {/* This will display the dynamic page content */}
          </main>

          {/* Right Sidebar */}
          <aside className="w-1/5 p-4">
            <Sidebar />
          </aside>
        </div>
      </main>
    </ClerkProvider>
  );
}
