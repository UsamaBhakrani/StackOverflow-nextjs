import { ReactNode } from "react";
import Signin from "./sign-in/page";
import Signup from "./sign-up/page";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
