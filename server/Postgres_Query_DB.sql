CREATE TABLE user_table(
user_id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(10) NOT NULL,
hashedPassword VARCHAR(255) NOT NULL
);

CREATE TABLE product(
product_id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
category VARCHAR(100) NOT NULL,
image_url TEXT NOT NULL,
new_price DECIMAL NOT NULL,
old_price DECIMAL NOT NULL
);



INSERT INTO product(name, category, image_url, new_price, old_price)
VALUES
('Bedroom 1', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_0.jpg?alt=media&token=b474c965-daf5-48c2-99f5-b997f4a772c9', 16623.45, 8311.72),
('Bedroom 2', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_1.jpg?alt=media&token=10964dca-83fa-4252-9408-4b5befabc4b6', 21197.20, 10598.60),
('Bedroom 3', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_2.jpg?alt=media&token=ce69ea13-e7f4-4ccf-83ae-aec7e678efc5', 39635.80, 19817.90),
('Bedroom 4', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_3.jpg?alt=media&token=c2282c8e-ddc8-4885-83fa-7e84c7ef7a56', 22808.70, 11404.35),
('Bedroom 5', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_4.jpg?alt=media&token=991a19dd-edf4-434b-b6a7-5b6d757dd54a', 32190.10, 16095.05),
('Bedroom 6', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_5.jpg?alt=media&token=62033388-8a83-4440-bec6-d4038e8709b6', 44027.70, 22013.85),
('Bedroom 7', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_6.jpg?alt=media&token=f1bb7055-d79a-44f6-b351-4addddd9b827', 37830.60, 18915.30),
('Bedroom 8', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_7.jpg?alt=media&token=9d2edcb4-5f05-4e2f-9ec5-2bdaf125d7b4', 27143.90, 13571.95),
('Bedroom 9', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_8.jpg?alt=media&token=d0a73bcf-cc90-427f-bf84-3641ecb51ba2', 48766.30, 24383.15),
('Bedroom 10', 'Bedroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BEDROOM_9.jpg?alt=media&token=64d230f8-4bd8-4375-a9e0-269042e64888', 13702.80, 6851.40),

INSERT INTO product (name, category, image_url, new_price, old_price) VALUES
('Living Room 1', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_0.jpg?alt=media&token=986d1967-b377-414d-8dc2-8f7601c8023c', 19500.75, 9750.38),
('Living Room 2', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_1.jpg?alt=media&token=f60a5e6f-09c8-44f2-8ec0-925bea4b914a', 35400.20, 17700.10),
('Living Room 3', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_2.jpg?alt=media&token=7993b020-6bdf-4a97-a29b-1a92e451d0c3', 14890.50, 7445.25),
('Living Room 4', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_3.jpg?alt=media&token=4cdd5b8d-d40b-4c7f-8fcb-354d2ec6e60c', 41670.40, 20835.20),
('Living Room 5', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_4.jpg?alt=media&token=937909f4-d588-4135-ac27-33c38d48415b', 22560.80, 11280.40),
('Living Room 6', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_5.jpg?alt=media&token=685d1966-ea1e-4786-97c2-3372278cd442', 31290.10, 15645.05),
('Living Room 7', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_6.jpg?alt=media&token=ef243648-5b9f-49fc-853c-0d4fe41d033f', 40120.70, 20060.35),
('Living Room 8', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_7.jpg?alt=media&token=49d9e794-74ae-41cc-ae64-3b2c70d321e6', 17050.90, 8525.45),
('Living Room 9', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_8.jpg?alt=media&token=bd11d1ed-046e-4191-9af8-98d0aadec660', 42800.30, 21400.15),
('Living Room 10', 'Living Room', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/LIVING_9.jpg?alt=media&token=21b3adf2-0383-451f-bc43-8194502c676c', 19830.20, 9915.10);

INSERT INTO product (name, category, image_url, new_price, old_price) VALUES
('Bathroom 1', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_0.jpg?alt=media&token=54a96271-6ca7-4d6e-9a35-d6d8f4531b84', 12150.25, 6075.12),
('Bathroom 2', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_1.jpg?alt=media&token=117b69ac-5388-4474-b09c-cd470f0e3826', 21980.60, 10990.30),
('Bathroom 3', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_2.jpg?alt=media&token=e89310f2-fabd-4867-9ad8-600e374abbcf', 10560.40, 5280.20),
('Bathroom 4', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_3.jpg?alt=media&token=3fac3c16-4b29-43a3-81c4-b3667c79cb4a', 29460.80, 14730.40),
('Bathroom 5', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_4.jpg?alt=media&token=e2dee7e2-77da-487b-81ee-215e03e0bbed', 16030.70, 8015.35),
('Bathroom 6', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_5.jpg?alt=media&token=fe644a59-fed3-40e7-b672-3bb91ddeb79d', 22195.10, 11097.55),
('Bathroom 7', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_6.jpg?alt=media&token=002866f7-416f-4650-9577-6dc68ef9c46a', 28550.30, 14275.15),
('Bathroom 8', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_7.jpg?alt=media&token=723fd6cb-1999-4a0a-bf68-b3106225dbb9', 12190.40, 6095.20),
('Bathroom 9', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_8.jpg?alt=media&token=a6b03471-f6f0-409e-bb8a-a13867306b54', 30210.90, 15105.45),
('Bathroom 10', 'Bathroom', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/BATHROOM_9.jpg?alt=media&token=752cb555-2666-416d-b31a-5bc384baeb14', 13920.20, 6960.10);

INSERT INTO product (name, category, image_url, new_price, old_price) VALUES
('Kitchen 1', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_0.jpg?alt=media&token=986d1967-b377-414d-8dc2-8f7601c8023c', 14420.80, 7210.40),
('Kitchen 2', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_1.jpg?alt=media&token=b0605fd2-c170-48df-8e5e-4a34493d1651', 27680.10, 13840.05),
('Kitchen 3', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_2.jpg?alt=media&token=caf697e7-b09b-4e0c-8e26-c1e3abcf52a3', 10390.20, 5195.10),
('Kitchen 4', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_3.jpg?alt=media&token=0c7781d1-6d52-4585-91e3-740a9d5fbaf2', 30150.40, 15075.20),
('Kitchen 5', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_4.jpg?alt=media&token=06217f35-e759-4dc8-8674-2b09be1095f0', 18260.70, 9130.35),
('Kitchen 6', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_5.jpg?alt=media&token=d459d739-3b8d-47d8-8952-1549e26d0da4', 24350.60, 12175.30),
('Kitchen 7', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_6.jpg?alt=media&token=1fa1c7f4-b5d9-4669-bf5b-b845a1b09130', 31780.90, 15890.45),
('Kitchen 8', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_7.jpg?alt=media&token=70c8c81e-4d44-452f-96cd-fac50412f16e', 13580.20, 6790.10),
('Kitchen 9', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_8.jpg?alt=media&token=ce5e2db1-3192-4ff1-bef3-0d4ad0d8107c', 28620.30, 14310.15),
('Kitchen 10', 'Kitchen', 'https://firebasestorage.googleapis.com/v0/b/testdb-c4992.appspot.com/o/KITCHEN_9.jpg?alt=media&token=17e2037f-d8ee-459f-b30f-92b1f08449fd', 12340.40, 6170.20);

SELECT * FROM product;

SELECT * FROM user_table;

SELECT product_id,name,category,image_url,new_price,old_price FROM product


