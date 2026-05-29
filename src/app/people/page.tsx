import Link from "next/link";

import { Hero } from "@/components/Hero";
import { PeopleSection } from "@/components/PeopleSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "People",
  description:
    "Meet the team behind Arrowhead Research and the people driving our mission forward.",
  path: "/people",
});

const LEADERSHIP_MEMBERS = [
  {
    name: "Timothy “Tito” Torres",
    role: "President",
    bio: "Tito is a national security strategist and counterterrorism expert with more than 20 years across U.S. Army Special Operations, intelligence, and global diplomacy. He leads Arrowhead Research’s work connecting operators, technologists, policymakers, and investors to address complex security challenges at speed.",
    image: "/images/people/timothy-torres.webp",
  },
  {
    name: "Dane Sebring",
    role: "Executive Director",
    bio: "Dane is a U.S. Army Paratrooper and engineering leader with experience in IT, cyberspace operations, and applied engineering. He builds practical engineering programs that connect servicemembers with academic and industry networks through rigorous, field-based projects.",
    image: "/images/people/dane-sebring.webp",
  },
  {
    name: "Amy Marden",
    role: "Vice President",
    bio: "Amy is a strategist and systems builder working across technology, national security, and humanitarian operations. She is the co-founder and CEO of Tenaxiom Technology and helps Arrowhead cultivate nontraditional tech talent through prototyping competitions and industry partnerships.",
    image: "/images/people/amy-marden.webp",
  },
];

const DIRECTORS_MEMBERS = [
  {
    name: "Josh Noll",
    role: "Director of Programming",
    bio: "Josh is a former infantryman turned systems engineer and software developer focused on Kubernetes, infrastructure automation, and secure cloud platforms. He leads Arrowhead’s programming with a builder’s mindset, helping servicemembers turn hard operational problems into practical technical projects.",
    image: "/images/people/josh-noll.webp",
  },
  {
    name: "Travis Williams",
    role: "Director of Strategic Partnerships",
    bio: "Travis is a veteran of the 75th Ranger Regiment and currently serves as an ROTC instructor at Virginia Tech. He leads strategic partnerships that connect Arrowhead Research with universities, technical innovation hubs, research organizations, and mission-aligned companies.",
    image: "/images/people/travis-williams.webp",
  },
];

const BOARD_MEMBERS = [
  {
    name: "Adam Caruso",
    role: "Board Member",
    bio: "Adam is a U.S. Army Special Forces officer who served as USSOCOM’s Technology Liaison for Boston and New England. He connects research, academia, government, and industry partners with the Special Operations Forces innovation ecosystem.",
    image: "/images/people/adam-caruso.webp",
  },
  {
    name: "Bill Wall",
    role: "Board Member",
    bio: "Bill is the CEO and head of Federal Sales for Accrete AI Government, bringing commercial AI innovation to public-sector missions. He previously served 22 years in the Army as a Special Forces Lieutenant Colonel and founded a JSOC computer network operations organization.",
    image: "/images/people/bill-wall.webp",
  },
  {
    name: "Yeri Lopez",
    role: "Board Member",
    bio: "Yeri is a partner at IronGate Capital Advisors, investing in dual-purpose national security technologies. His work spans venture capital, technology transfer, national security operations, and mentorship for people transitioning from intelligence and special operations careers.",
    image: "/images/people/yeri-lopez.webp",
  },
];

export default function PeoplePage() {
  return (
    <>
      <Hero
        title="Our People"
        subtitle="Meet the team behind Arrowhead Research."
        compact
        videoSrc="/videos/banner_video_1.mp4"
      />

      <PeopleSection
        title="Leadership"
        description="Our team brings together diverse expertise to empower servicemembers through education and hands-on technical programming."
        members={LEADERSHIP_MEMBERS}
      />

      <PeopleSection
        title="Directors"
        description="Our directors lead key programs and partnerships that advance Arrowhead Research’s mission."
        members={DIRECTORS_MEMBERS}
        alternate
      />

      <PeopleSection
        title="Board Members"
        description="Our board provides strategic guidance and oversight to ensure Arrowhead Research fulfills its mission with integrity and impact."
        members={BOARD_MEMBERS}
      />

      {/* CTA */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24 dark:bg-dark-gray-light/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Interested in volunteering with us?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            We are always looking for passionate individuals to join our team
            and help us make a difference.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-jade-green px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-jade-green-dark hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
