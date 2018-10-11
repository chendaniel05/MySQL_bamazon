USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES 
('Watch', 'mens accessories', 35.99, 50),
('Necklace', 'womens accessories', 40.99, 20),
('Violin','instruments', 399.99, 13),
('Camera Lense', 'camera accessories', 100.54, 5),
('Playstation', 'Games', 122.45, 71),
('Microwave', 'kitchenware', 99.23, 12),
('Mountain Bike', 'sports', 799.99, 34),
('Jeans', 'mens clothing', 355.99, 36),
('Hand Bag', 'women accessories', 123.87, 23),
('gloves', 'Winter wear', 32.99, 19);

SELECT * FROM products;
