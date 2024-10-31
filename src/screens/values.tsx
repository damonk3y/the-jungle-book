import Logo from "@/components/ui/assets/logo.svg";
import { SocialLinks } from "@/components/ui/social-links";

export const Values = () => {
  return (
    <section className="w-full h-full flex items-center justify-center gap-24 mx-auto max-w-[1248px] px-4 py-12">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src={Logo} alt="damonk3ys logo" className="size-80" />
        <h3 className="w-full text-center text-xl text-yellow-400 tracking-widest underline">#weareallmonk3ys</h3>
        <SocialLinks className="mt-2" />
      </div>
      <div className="basis-2/3 overflow-y-scroll py-20 h-full scrollbar-hide">
        <h1 className="text-4xl italic mb-12 scroll">Community Values</h1>
        <h6 className="font-bold text-blue-400 underline mb-2">1. Curiosity and Lifelong Learning</h6>
        <p className="mb-4">
          Embrace a mindset of continuous learning and curiosity. The drive to explore, understand, and improve is at the heart of gaming, coding, building, and hacking. Everyone is encouraged to ask questions, share knowledge, and seek answers together.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">2. Collaboration Over Competition</h6>
        <p className="mb-4">
          While healthy competition can drive innovation, true growth comes from collaboration. Encourage helping each other, sharing resources, and building on each other's work. Success here is a team sport.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">3. Respect for All Skill Levels</h6>
        <p className="mb-4">
          Everyone starts somewhere, and every skill level is valued. From beginners to experts, respect each other's contributions and be mindful that we all have unique experiences and perspectives to offer.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">4. Integrity and Ethical Hacking</h6>
        <p className="mb-4">
          Innovation and hacking go hand in hand with responsibility. Act with integrity, respect privacy, and use your skills to create positive, ethical impacts. Our code of conduct is to protect, improve, and inspire, not exploit or harm.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">5. Creativity and Innovation</h6>
        <p className="mb-4">
          Creativity fuels progress, so bring your unique ideas and bold concepts. Whether it's coding, game design, modding, or a new way to build or solve a problem, we encourage pushing boundaries and thinking outside the box.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">6. Helpfulness and Mentorship</h6>
        <p className="mb-4">
          Strong communities grow when we lift each other up. Be willing to help when you can, whether through answering questions, sharing tips, or mentoring newer members. Knowledge shared is knowledge multiplied.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">7. Inclusivity and Diversity</h6>
        <p className="mb-4">
          We welcome and respect everyone, regardless of background, identity, or experience. Different perspectives make us stronger, and inclusivity helps create a safe, welcoming space where everyone can thrive.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">8. Quality and Excellence</h6>
        <p className="mb-4">
          Strive for quality in everything you do, from code to gameplay. While perfection isn't required, a commitment to improving your craft, sharing best practices, and building reliable, impactful projects is core to our community.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">9. Transparency and Open Source</h6>
        <p className="mb-4">
          Openness builds trust. Whenever possible, work transparently, share your process, and contribute to open-source projects. A culture of transparency allows everyone to learn, improve, and innovate more effectively.
        </p>

        <h6 className="font-bold text-blue-400 underline mb-2">10. Celebrate Success and Have Fun</h6>
        <p className="mb-4">
          Celebrate every win, big or small! Recognize each other's achievements, from solving a challenging problem to releasing a new game mod. And most importantly, have fun—gaming, coding, building, and hacking should be enjoyable, fulfilling experiences.
        </p>

        <p className="mt-6 italic">
          By upholding these values, we build a strong, vibrant, and resilient community that supports growth, innovation, and meaningful connections. Let's grow, learn, and create together!
        </p>
      </div>
    </section>
  );
};
