import { prisma } from "@/lib/prisma";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects"; // Changed from ProjectsGrid
import Skills from "./components/sections/Skills";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default async function Home() {
  try {
    // Fetch all data at build time
    const [projects, skills, testimonials] = await Promise.all([
      prisma.project.findMany({
        include: {
          images: {
            orderBy: { order: 'asc' }
          },
          technologies: true,
          features: true
        },
        orderBy: { id: 'desc' }
      }),
      prisma.skill.findMany({
        orderBy: { displayOrder: 'asc' }
      }),
      prisma.testimonial.findMany({
        orderBy: { id: 'asc' }
      })
    ]);

    // Process testimonials to ensure theme is properly typed
    const processedTestimonials = testimonials.map(t => ({
      ...t,
      theme: t.theme as any
      // Handle nullable dates if needed
      
    }));

    // Process skills to handle ALL nullable fields
    const processedSkills = skills.map(skill => ({
      id: skill.id,
      title: skill.title,
      description: skill.description,
      category: skill.category,
      categoryColor: skill.categoryColor,
      skillsList: Array.isArray(skill.skillsList) 
        ? skill.skillsList.map(item => String(item))
        : [],
      displayOrder: skill.displayOrder ?? 0,
      // Handle nullable dates by converting to Date or undefined
      createdAt: skill.createdAt || new Date(),
      updatedAt:  skill.updatedAt || new Date()
    }));

    return (
      <main>
        <Hero />
        <Projects projects={projects} />
        <Skills skills={processedSkills} />
        <Testimonials testimonials={processedTestimonials} />
        <Contact />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    
    // Return fallback UI with empty data
    return (
      <main>
        <Hero />
        <Projects projects={[]} />
        <Skills skills={[]} />
        <Testimonials testimonials={[]} />
        <Contact />
      </main>
    );
  }
}