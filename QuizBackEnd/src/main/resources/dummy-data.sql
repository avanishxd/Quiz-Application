-- Dummy quiz questions
INSERT INTO quiz (category, difficulty, option1, option2, option3, option4, question, answer) VALUES
('Java', 'Easy', 'class', 'new', 'this', 'static', 'Which keyword creates an object in Java?', 'new'),
('Java', 'Medium', 'List', 'Queue', 'Set', 'Map', 'Which collection does not allow duplicate elements?', 'Set'),
('Spring', 'Easy', '@Controller', '@Service', '@RestController', '@Repository', 'Which annotation marks a class as a REST controller?', '@RestController'),
('Spring', 'Medium', 'spring.jpa.show-sql', 'spring.jpa.hibernate.ddl-auto', 'spring.datasource.url', 'spring.main.banner-mode', 'Which property enables Hibernate to auto-update schema?', 'spring.jpa.hibernate.ddl-auto'),
('SQL', 'Easy', 'GET', 'SELECT', 'FETCH', 'OPEN', 'Which SQL statement is used to retrieve data?', 'SELECT'),
('SQL', 'Medium', 'WHERE', 'GROUP BY', 'HAVING', 'ORDER BY', 'Which clause is used to filter groups in SQL?', 'HAVING'),
('JavaScript', 'Easy', '=', '==', '===', '=>', 'Which symbol is used for strict equality in JavaScript?', '==='),
('JavaScript', 'Medium', 'JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.decode()', 'Which method converts JSON text to a JavaScript object?', 'JSON.parse()');
