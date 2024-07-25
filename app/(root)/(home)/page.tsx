'use client'
import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  
  const hello = (a: String) => {
    console.log(a);
  };

  return (
    <div className="" onClick={() => hello("hasnain?")}>
      <UserButton />
    </div>
  );
};

export default HomePage;