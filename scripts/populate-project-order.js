// scripts/populate-project-order.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting to populate project order...')
  
  // Get all projects ordered by current display order (e.g., by id or title)
  const projects = await prisma.project.findMany({
    orderBy: { id: 'asc' } // You can change this to any order you prefer
  })
  
  console.log(`Found ${projects.length} projects to update`)
  
  // Update each project with sequential order numbers
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]
    await prisma.project.update({
      where: { id: project.id },
      data: { order: i + 1 } // Start from 1
    })
    console.log(`Updated project ${project.title} with order ${i + 1}`)
  }
  
  console.log('Successfully populated order for all projects!')
}

main()
  .catch((e) => {
    console.error('Error populating project order:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })