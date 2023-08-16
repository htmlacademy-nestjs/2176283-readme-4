-- AlterTable
ALTER TABLE "posts_citation" ALTER COLUMN "tag" DROP NOT NULL,
ALTER COLUMN "tag" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "posts_photo" ALTER COLUMN "tag" DROP NOT NULL,
ALTER COLUMN "tag" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "posts_text" ALTER COLUMN "tag" DROP NOT NULL,
ALTER COLUMN "tag" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "posts_url" ALTER COLUMN "tag" DROP NOT NULL,
ALTER COLUMN "tag" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "posts_video" ALTER COLUMN "tag" DROP NOT NULL,
ALTER COLUMN "tag" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "comments" (
    "message" TEXT NOT NULL,
    "comment_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);
