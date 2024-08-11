/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `State` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "City_id_key" ON "City"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Country_id_key" ON "Country"("id");

-- CreateIndex
CREATE UNIQUE INDEX "State_id_key" ON "State"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
