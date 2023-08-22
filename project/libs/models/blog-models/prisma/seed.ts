import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.post.upsert({
    where: { postId: 1 },
    update: {},
    create: {
      usrId: '1',
      type: "photo",
      photo: "landscape.jpg",
      likesCount: 0,
      commentsCount: 1,
      coments: {
        create: [
          {
            userId: '2',
            text: 'Удивительно',
          }
        ]
      }
    }
  });
  await prisma.post.upsert({
    where: { postId: 2 },
    update: {},
    create: {
      userId: '1',
      type: "quote",
      text: "У вас нет телевизора? А к чему повернута вся ваша мебель?",
      author: "Джоуи Триббиани",
      likesCount: 3,
      likes: {
        create: [
          {
            postId: 2,
            likedByUsersIds: ['3', '9', '2']
          }
        ]
      },
      commentsCount: 0,
    }
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
