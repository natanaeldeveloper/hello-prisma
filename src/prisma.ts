import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const user = await prisma.user.create({
        data: {
            name: 'Natanael Oliveira',
            email: 'example@gmail.com',
            posts: {
                create: [
                    {
                        title: 'Post 1',
                        content: 'My first post',
                        published: true,
                    },
                    {
                        title: 'Post 2',
                        content: 'My second post',
                        published: false,
                    }
                ]
            }
        },
    })
    
    console.log(user)
}

main()
    .then(async () => {
        console.log('[prisma client] successful execution. Disconnecting ...')
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log('[prisma client] error execution. Disconnecting ...')
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })