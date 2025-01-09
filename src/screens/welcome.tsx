import { Link } from "react-router-dom";
import Logo from "@/components/ui/assets/logo.svg";
import { SocialLinks } from "@/components/ui/social-links";

export const Welcome = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mx-auto max-w-[500px] px-4">
      {/* <div className="flex gap-8">
        <Link to="/projects" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transform rotate-3 transition-all hover:scale-110 hover:-rotate-2 shadow-lg border-2 border-white/20 backdrop-blur-sm font-bold tracking-wide">
          Projects
        </Link>
        <Link to="/blog" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl -rotate-2 transform hover:rotate-3 transition-all hover:scale-110 shadow-lg border-2 border-white/20 backdrop-blur-sm font-bold tracking-wide">
          Blog
        </Link>
      </div> */}
      <Link to="/" className="block">
        <img src={Logo} alt="damonk3ys logo" className="size-80" />
      </Link>
      <h1 className="text-blue-400">da monk3y</h1>
      <p className="mt-4 text-gray-400 text-center mx-auto">
        Solo founder living in the jungle with an ethernet cable trying to find my species.
      </p>
      <SocialLinks className="mt-12" />
    </section>
  );
};
