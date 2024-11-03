import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { cn } from "@/lib/utils";

const docUrls = {
  serviceSessionsDiagram:
    "https://link.excalidraw.com/readonly/AgJPoMMyrJMZAdnTc067?darkMode=true",
  exploreWireframes:
    "https://link.excalidraw.com/readonly/HGcdRhM20mzn6VvOav6G?darkMode=true",
  profileWireframes:
    "https://link.excalidraw.com/readonly/CC4ILtpA69NtLR7dSLFr?darkMode=true"
};

export default function Docs() {
  const [activeDoc, setActiveDoc] = useState<
    "serviceSessionsDiagram" | "exploreWireframes" | "profileWireframes"
  >("serviceSessionsDiagram");
  return (
    <section className="flex flex-col items-center justify-center max-w-screen-2xl w-full mx-auto">
      <Link to="/" className="block mt-24">
        <img src={Logo} alt="damonk3ys logo" className="size-80" />
      </Link>
      <h1 className="text-xl text-fuchsia-500 tracking-widest">
        #monk3ydocs 🍌
      </h1>
      <SocialLinks className="mt-12" />
      <div className="flex lg:flex-row flex-col justify-center items-center my-12 gap-4 w-full px-4 max-w-[500px]">
        <Button
          onClick={() => {
            setActiveDoc("serviceSessionsDiagram");
          }}
          className={cn("border-2 border-white px-4 w-full", {
            "bg-gray-300 !text-black hover:text-white":
              activeDoc === "serviceSessionsDiagram"
          })}
          variant="ghost"
        >
          Sessions
        </Button>
        <Button
          onClick={() => setActiveDoc("exploreWireframes")}
          className={cn("border-2 border-white px-4 w-full", {
            "bg-gray-300 !text-black hover:text-white":
              activeDoc === "exploreWireframes"
          })}
          variant="ghost"
        >
          Explore Wireframes
        </Button>
        <Button
          onClick={() => setActiveDoc("profileWireframes")}
          className={cn("border-2 border-white px-4 w-full", {
            "bg-gray-300 !text-black hover:text-white":
              activeDoc === "profileWireframes"
          })}
          variant="ghost"
        >
          Profile Wireframes
        </Button>
      </div>
      <div className="w-full h-full min-h-[500px] lg:min-h-[1000px] pb-12 px-4">
        <iframe
          src={docUrls[activeDoc]}
          className="border-none w-full h-full rounded-2xl"
        />
      </div>
    </section>
  );
}
