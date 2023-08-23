-- CreateTable
CREATE TABLE "posts_video" (
    "post_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL DEFAULT '',
    "tag" TEXT[],
    "user_id" TEXT,

    CONSTRAINT "posts_video_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "posts_text" (
    "post_id" SERIAL NOT NULL,
    "preview" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL DEFAULT '',
    "tag" TEXT[],
    "user_id" TEXT,

    CONSTRAINT "posts_text_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "posts_citation" (
    "post_id" SERIAL NOT NULL,
    "text" TEXT NOT NULL DEFAULT '',
    "author" TEXT NOT NULL DEFAULT '',
    "tag" TEXT[],
    "user_id" TEXT,

    CONSTRAINT "posts_citation_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "posts_photo" (
    "post_id" SERIAL NOT NULL,
    "foto" TEXT NOT NULL DEFAULT '',
    "tag" TEXT[],
    "user_id" TEXT,

    CONSTRAINT "posts_photo_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "posts_url" (
    "post_id" SERIAL NOT NULL,
    "url" TEXT NOT NULL DEFAULT '',
    "description" TEXT,
    "tag" TEXT[],
    "user_id" TEXT,

    CONSTRAINT "posts_url_pkey" PRIMARY KEY ("post_id")
);
