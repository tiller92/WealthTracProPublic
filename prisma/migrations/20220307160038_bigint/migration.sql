-- AlterTable
ALTER TABLE "Usercrypto" ALTER COLUMN "shares" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Userdebt" ALTER COLUMN "interest" SET DATA TYPE BIGINT,
ALTER COLUMN "debt" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Userrealestate" ALTER COLUMN "value" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Userstocks" ALTER COLUMN "shares" SET DATA TYPE BIGINT;