use employees;

INSERT INTO departments
 (department_name)
VALUES ("Research"),
       ("Mechanical Engeneering"),
       ("AI/Software");
       
       
       
INSERT INTO roles (title, salary, department_id)
VALUES  ("Mister Manager", 100000, 1),
        ("Researcher", 50000, 1),
        ("Research Assistant", 30000, 1),
        ("Mechanical Manager", 100000, 2),
        ("Mechanical Engeneer", 50000, 2),
        ("Engeneering Assistant", 30000, 2),
        ("Software Manager", 100000, 3),
        ("AI Developer", 50000, 3),
        ("Junior Developer", 30000, 3);
        

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Lynn", "Learning", 1, 1),
       ("Reginold", "Research", 2, 1),
       ("Regina", "Discovery", 3, 2),
       ("Michael", "Meechan", 4, 1),
       ("Melinda", "Gears", 5, 4),
       ("Milo", "Maker", 6, 5),
       ("Alison", "Artifice", 7, 1),
       ("Alex", "Isolinear", 8, 7),
       ("Adriana", "Android", 9, 8),
       ("Isaac", "Asimoff", 9, 7);
    