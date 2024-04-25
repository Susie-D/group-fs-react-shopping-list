CREATE TABLE "shoppingList" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR(100),
	"quantity" INT,
	"unit" VARCHAR(10),
	"buy" BOOLEAN DEFAULT FALSE);
Insert into "shoppingList" (item, quantity, unit, buy) 
VALUES
('Apple', 5, 'lbs', FALSE),
('Bread', 1, 'Loaf', FALSE),
('Milk', 1, 'gallon', FALSE),
('Sliced Almonds', 2, 'cups', FALSE),
('Bananas', 1, 'Bunch', TRUE);