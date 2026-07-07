import Image from "next/image";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";
import PremiumBackground from "./ui/PremiumBackground";

const featuredProjects = [
  {
    title: "Centurion Intelligence",
    image: "/images/centurion-intelligence.png",
    category: "Client Website",
    role: "Web Developer • UX Planning • Content Strategy",
    description:
      "A professional website recreation project focused on improving structure, credibility, content flow, and digital presence.",
    challenge:
      "The company needed a clearer website experience that communicated services, trust, and brand identity more effectively.",
    solution:
      "I supported content organization, Webflow planning, visual direction, and client communication.",
    impact:
      "Created a stronger digital foundation and gained valuable real client experience.",
    tech: [
      "Webflow",
      "UX Planning",
      "Content Strategy",
      "Client Work",
    ],
  },
  {
    title: "Truman Middle College",
   image: "/images/truman-middle-college.png",
    category: "Education Website",
    role: "Website Designer • Front-End Developer",
    description:
      "A complete school website recreation focused on modern design, better navigation, responsive layout, and accessibility.",
    challenge:
      "The original website needed a cleaner design and improved user experience.",
    solution:
      "Designed a modern layout, reorganized information, and created a responsive interface.",
    impact:
      "Improved usability and made school information easier to access.",
    tech: [
      "Web Design",
      "Responsive Design",
      "UI/UX",
      "Content Organization",
    ],
  },
];

const projects = [
  {
    title: "Lucky Alanka",
    image: "/images/lucky-alanka.png",
    category: "Founder Project",
    description:
      "A jewelry e-commerce brand I am building from the ground up, including Shopify setup, product organization, storytelling, SEO, and customer experience.",
    tech: [
      "Shopify",
      "Branding",
      "SEO",
      "E-Commerce",
    ],
  },
  {
    title: "Bergonzi Violins",
    image: "/images/bergonzi-violins.png",
    category: "Website Maintenance",
    description:
      "Supported an established violin business through WordPress, Bluehost staging, content updates, and premium presentation.",
    tech: [
      "WordPress",
      "Bluehost",
      "Content Updates",
    ],
  },
  {
    title: "The Classic Gem",
    image: "/images/classic-gem.png",
    category: "Luxury Product Content",
    description:
      "Created refined product presentation and digital content focused on trust, clarity, storytelling, and customer experience.",
    tech: [
      "Product Content",
      "Luxury Branding",
      "Customer Trust",
    ],
  },
  {
    title: "Project STELLA",
    image: "/images/project-stella.png",
    category: "Developer Portfolio",
    description:
      "My personal portfolio showcasing software engineering, web development, AI, and digital product design.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
    ],
  },
];

export default function Projects() {
  return (
    <Section id="work" className="py-32">
      <Glow position="right" />

      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Building digital products that solve real problems.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            These projects show how I combine web development, design thinking,
            business strategy, and user-centered problem solving.
          </p>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            >
              <div className="grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-2xl">
                <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="100vw"
  className="object-cover transition duration-700 hover:scale-105"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6">
                    <Badge>{project.category}</Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                      Featured Project
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <Badge>{project.category}</Badge>

                  <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-cyan-300">
                    {project.role}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Solution
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">Impact</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button href="#contact">Get In Touch</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="flex h-full flex-col items-center text-center">
                <div className="relative mb-6 h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-3 transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                <Badge>{project.category}</Badge>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}