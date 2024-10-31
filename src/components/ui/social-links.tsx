import DiscordIcon from "@/components/ui/assets/discord-icon.svg";
import XIcon from "@/components/ui/assets/x-icon.svg";
import InstagramIcon from "@/components/ui/assets/instagram-icon.svg";
import GitHubIcon from "@/components/ui/assets/github-icon.svg";
import TwitchIcon from "@/components/ui/assets/twitch-icon.svg";
import { cn } from "@/lib/utils";

export const SocialLinks = ({ className }: { className?: string }) => {
  return <div className={cn("flex gap-4", className)}>
  <a href="https://discord.gg/rHfXrVNe2V" target="_blank">
    <img
      src={DiscordIcon}
      alt="damonk3ys discord"
      className="size-6"
    />
  </a>
  <a href="https://x.com/damonk3y_" target="_blank">
    <img src={XIcon} alt="damonk3ys X" className="size-5" />
  </a>
  <a
    href="https://www.instagram.com/damonk3y.xyz/"
    target="_blank"
  >
    <img
      src={InstagramIcon}
      alt="damonk3ys instagram"
      className="size-5"
    />
  </a>
  <a
    href="https://github.com/damonk3y"
    target="_blank"
  >
    <img
      src={GitHubIcon}
      alt="damonk3ys github"
      className="size-5"
    />
  </a>
  <a
    href="https://www.twitch.tv/damonk3y_"
    target="_blank"
  >
    <img
      src={TwitchIcon}
      alt="damonk3ys github"
      className="size-5"
    />
  </a>
</div>
};
