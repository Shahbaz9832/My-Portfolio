import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import ExternalLink from "./ui/ExternalLink";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import {
  EMAIL,
  EMAIL_HREF,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../constants/links";

const contactCards = [
  {
    icon: <FaEnvelope className="text-3xl mb-4" />,
    title: "Email",
    description: EMAIL,
    href: EMAIL_HREF,
    external: false,
    descriptionClassName: "text-sm break-all text-slate-300",
  },
  {
    icon: <FaLinkedin className="text-3xl mb-4" />,
    title: "LinkedIn",
    description: "Connect with me",
    href: LINKEDIN_URL,
  },
  {
    icon: <FaGithub className="text-3xl mb-4" />,
    title: "GitHub",
    description: "View my repositories",
    href: GITHUB_URL,
  },
  {
    icon: <FaDownload className="text-3xl mb-4" />,
    title: "Resume",
    description: "Download PDF",
    href: RESUME_URL,
  },
];

const cardClassName =
  "bg-slate-800 rounded-2xl p-6 hover:bg-blue-600 transition duration-300";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="bg-slate-900 text-white"
      containerClassName="max-w-6xl"
    >
      <SectionHeading
        title="Let's Build Something Amazing"
        subtitle="I'm currently looking for Software Engineer, Full Stack Developer, Backend Developer, and Java Developer opportunities. If you'd like to discuss a project or opportunity, feel free to connect."
        titleClassName=""
        subtitleClassName="max-w-2xl text-slate-300"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactCards.map((card) => {
          const content = (
            <>
              {card.icon}

              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

              <p className={card.descriptionClassName ?? "text-slate-300"}>
                {card.description}
              </p>
            </>
          );

          return card.external === false ? (
            <a key={card.title} href={card.href} className={cardClassName}>
              {content}
            </a>
          ) : (
            <ExternalLink
              key={card.title}
              href={card.href}
              className={cardClassName}
            >
              {content}
            </ExternalLink>
          );
        })}
      </div>
    </Section>
  );
};

export default Contact;
