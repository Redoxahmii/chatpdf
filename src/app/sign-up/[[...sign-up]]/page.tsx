import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100">
      <SignUp />
    </div>
  );
}
