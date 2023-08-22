/*
  Warnings:

  - You are about to drop the `posts_citation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts_photo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts_text` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts_url` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts_video` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PublicationType" AS ENUM ('video', 'text', 'quote', 'photo', 'link');

-- CreateEnum
CREATE TYPE "PublicationState" AS ENUM ('published', 'draft');

-- DropTable
DROP TABLE "posts_citation";

-- DropTable
DROP TABLE "posts_photo";

-- DropTable
DROP TABLE "posts_text";

-- DropTable
DROP TABLE "posts_url";

-- DropTable
DROP TABLE "posts_video";

-- CreateTable
CREATE TABLE "posts" (
    "post_id" SERIAL NOT NULL,
    "type" "PublicationType" NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publish_at" TIMESTAMP(3) NOT NULL,
    "state" "PublicationState" NOT NULL DEFAULT 'published',
    "likes_count" INTEGER NOT NULL,
    "comments_count" INTEGER NOT NULL,
    "title" TEXT,
    "url" TEXT,
    "tag" TEXT,
    "preview" TEXT,
    "text" TEXT,
    "author" TEXT,
    "photo" TEXT,
    "description" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "likes" (
    "post_id" INTEGER NOT NULL,
    "liked_by_ids" TEXT[],

    CONSTRAINT "likes_pkey" PRIMARY KEY ("post_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "likes_post_id_key" ON "likes"("post_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;
