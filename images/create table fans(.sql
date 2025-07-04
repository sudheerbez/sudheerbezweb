create table fans(
    id int,
    name varchar(255),
    age int,
    hero varchar(255),
    primary key (id),
    unique (name, hero),
    check (age > 0 and age < 100),
    foreign key (hero) references heroes(name) on delete cascade on update cascade
    -- foreign key (hero) references heroes(name) on delete set null on update cascade
    -- foreign key (hero) references heroes(name) on delete restrict on update cascade
)
CREATE TABLE heroes(
    name varchar(255),
    power varchar(255),
    primary key (name)
);
-- Insert dummy values into the heroes table
INSERT INTO heroes (name, power) VALUES
('Superman', 'Super Strength'),
('Batman', 'Intelligence'),
('Wonder Woman', 'Super Strength'),
('Flash', 'Super Speed'),
('Aquaman', 'Underwater Breathing'),
('Green Lantern', 'Power Ring'),
('Cyborg', 'Cybernetics'),
('Martian Manhunter', 'Shape-shifting');

TRUNCATE table heroes;
-- Insert dummy values into the fans table
INSERT INTO fans (id, name, age, hero) VALUES
(1, 'John Doe', 25, 'Superman'),
(2, 'Jane Smith', 30, 'Batman'),
(3, 'Alice Johnson', 22, 'Wonder Woman'),
(4, 'Bob Brown', 28, 'Flash'),
(5, 'Charlie Davis', 35, 'Aquaman'),
(6, 'Emily White', 27, 'Green Lantern'),
(7, 'Michael Black', 32, 'Cyborg'),
(8, 'Sarah Green', 29, 'Martian Manhunter');
SELECT * from fans;
SELECT * from heroes;
-- Insert dummy values into the heroes table
INSERT INTO heroes (name, power) VALUES
('Superman', 'Super Strength'),
('Batman', 'Intelligence'),
('Wonder Woman', 'Super Strength'),
('Flash', 'Super Speed'),
('Aquaman', 'Underwater Breathing');

-- Insert dummy values into the fans table
INSERT INTO fans (id, name, age, hero) VALUES
(1, 'John Doe', 25, 'Superman'),
(2, 'Jane Smith', 30, 'Batman'),
(3, 'Alice Johnson', 22, 'Wonder Woman'),
(4, 'Bob Brown', 28, 'Flash'),
(5, 'Charlie Davis', 35, 'Aquaman');