import { PrismaClient } from "@prisma/client";
import { projects } from "./data/projects.js";
import { testimonials } from "./data/testimonials.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding full database...");

  /* ----------------------------------
     CLEAN DATABASE (DEV SAFE)
  ---------------------------------- */
  await prisma.projectTechnology.deleteMany();
  await prisma.projectFeature.deleteMany();
  await prisma.projectImage.deleteMany();
  await prisma.project.deleteMany();
  await prisma.testimonial.deleteMany();

  /* ----------------------------------
     SEED PROJECTS
  ---------------------------------- */
  for (const [key, project] of Object.entries(projects)) {
    await prisma.project.create({
      data: {
        slug: key,
        title: project.title,
        meta: project.meta,
        description: project.description,
        impact: project.impact,

        images: {
          create: project.images.map((img, index) => ({
            imageUrl: `/${img}`,
            order: index + 1
          }))
        },

        features: {
          create: project.features.map(text => ({
            text
          }))
        },

        technologies: {
          create: project.technologies.map(name => ({
            name
          }))
        }
      }
    });
  }

  /* ----------------------------------
     SEED TESTIMONIALS
  ---------------------------------- */
  for (const t of testimonials) {
    await prisma.testimonial.create({
      data: {
        initials: t.initials,
        name: t.name,
        role: t.role,
        text: t.text,
        footer: t.footer,
        theme: t.theme
      }
    });
  }

  console.log("✅ Seeding complete");
}

/* ----------------------------------
   RUN
---------------------------------- */
main()
  .catch(err => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
