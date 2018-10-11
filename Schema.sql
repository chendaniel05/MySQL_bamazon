DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

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
