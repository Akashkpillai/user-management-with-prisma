import { PrismaClient } from'@prisma/client';
import * as bcrypt from 'bcrypt'
import { country, state ,city } from './seed-data/data';

const prisma = new PrismaClient();

async function main() {
    // Seed countries
      await prisma.country.createMany({
        data: country,
      });
  
    // Seed states
      await prisma.state.createMany({
        data: state,
      });

    // Seed city
      await prisma.city.createMany({
        data: city,
      });
    const hashedPassword = await bcrypt.hash("pillai", 10);
    // seed admin and user
    await prisma.user.createMany({
      data:[
        { 
          name:"Akash",
          email:"admin@gmail.com",
          password:hashedPassword,
          role:"ADMIN",
          countryId:0,
          stateId:100,
          cityId:10001
        },
        { 
          name:"AkashPillai",
          email:"akash@gmail.com",
          password:hashedPassword,
          role:"USER",
          countryId:0,
          stateId:100,
          cityId:10001
        }
      ]
    })
  }

  main()
  .then(() => {
    console.log('Seeding completed');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });



