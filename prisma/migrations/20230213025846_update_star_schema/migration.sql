-- CreateTable
CREATE TABLE "Fates" (
    "fate_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "picked_cards" TEXT NOT NULL,
    "reflection" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Star" (
    "star_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "star_image" TEXT NOT NULL DEFAULT ' '
);
