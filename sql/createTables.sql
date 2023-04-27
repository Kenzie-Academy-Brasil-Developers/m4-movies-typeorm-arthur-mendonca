CREATE TABLE movies(
    "id" SERIAL PRIMARY  KEY, 
    "name" VARCHAR(50) UNIQUE NOT NULL,
    "description" TEXT,
    "duration" INT NOT NULL, 
    "price"  INT NOT NULL
);
