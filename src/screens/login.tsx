import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  // const navigate = useNavigate();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      // const formData = new FormData(e.currentTarget);
      // const email = formData.get("email") as string;
      // const password = formData.get("password") as string;
      // await login(email, password);
    } catch {
      toast.error("Invalid credentials");
    }
  };
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h4 className="text-gray-400 text-sm">Sign In</h4>
      <h1 className="text-2xl font-bold">THE JUNGLE BOOK</h1>
      <h3 className="text-lg tracking-widest text-green-500 mb-12">
        #damonk3y
      </h3>
      <form
        className="flex flex-col gap-4 justify-center mt-4"
        onSubmit={handleSubmit}
      >
        <Input type="text" placeholder="Email" name="email" />
        <Input
          type="password"
          placeholder="Password"
          name="password"
        />
        <Button
          type="submit"
          className="font-semibold border-2 border-white mt-4"
        >
          Sign In
        </Button>
        <p className="text-gray-400 mx-auto text-xs">OR</p>
        <Link
          to="/"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "font-semibold"
          )}
        >
          Create an Account
        </Link>
      </form>
    </section>
  );
}
