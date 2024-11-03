import Logo from "@/components/ui/assets/logo.svg";
import { buttonVariants } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mx-auto max-w-[500px] px-4">
      <Link to="/" className="block pt-24">
        <img src={Logo} alt="damonk3ys logo" className="size-80" />
      </Link>
      <h1 className="text-blue-400">da monk3y</h1>
      <p className="mt-4 pr-20 text-gray-400">
        We are principle driven people who do things for fun. We
        build, we game, we learn, we share.
      </p>
      <p className="mt-12 text-right w-full">
        {"-> let people know you exist"}
      </p>
      <p className="text-right w-full">
        {"-> be active in the community"}
      </p>
      <p className="text-right w-full">
        {"-> have fun and respect the jungle"}
      </p>
      <SocialLinks className="mt-12" />
      <div className="flex justify-center my-12 pb-12 max-lg:w-full">
          <Link
            className={cn(buttonVariants(), "border-2 font-semibold border-white px-12")}
            to="/values"
          >
            Community Values
          </Link>
      </div>
    </section>
  );
};
