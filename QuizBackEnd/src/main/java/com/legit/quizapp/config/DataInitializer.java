package com.legit.quizapp.config;

import com.legit.quizapp.dao.UserRepository;
import com.legit.quizapp.dao.qDAO;
import com.legit.quizapp.model.Quiz;
import com.legit.quizapp.model.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner seedInitialData(UserRepository userRepository, qDAO quizRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.count() == 0) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setEmail("admin@quizapp.local");
                admin.setRole("ADMIN");
                admin.setPassword(passwordEncoder.encode("admin123"));

                User student = new User();
                student.setUsername("student1");
                student.setEmail("student1@quizapp.local");
                student.setRole("USER");
                student.setPassword(passwordEncoder.encode("student123"));

                userRepository.saveAll(List.of(admin, student));
            }

            if (quizRepository.count() == 0) {
                quizRepository.saveAll(List.of(
                        createQuiz(
                                "Java",
                                "Easy",
                                "Which keyword creates an object in Java?",
                                "class",
                                "new",
                                "this",
                                "static",
                                "new"
                        ),
                        createQuiz(
                                "Java",
                                "Medium",
                                "Which collection does not allow duplicate elements?",
                                "List",
                                "Queue",
                                "Set",
                                "Map",
                                "Set"
                        ),
                        createQuiz(
                                "Spring",
                                "Easy",
                                "Which annotation marks a class as a REST controller?",
                                "@Controller",
                                "@Service",
                                "@RestController",
                                "@Repository",
                                "@RestController"
                        ),
                        createQuiz(
                                "Spring",
                                "Medium",
                                "Which property enables Hibernate to auto-update schema?",
                                "spring.jpa.show-sql",
                                "spring.jpa.hibernate.ddl-auto",
                                "spring.datasource.url",
                                "spring.main.banner-mode",
                                "spring.jpa.hibernate.ddl-auto"
                        ),
                        createQuiz(
                                "SQL",
                                "Easy",
                                "Which SQL statement is used to retrieve data?",
                                "GET",
                                "SELECT",
                                "FETCH",
                                "OPEN",
                                "SELECT"
                        ),
                        createQuiz(
                                "SQL",
                                "Medium",
                                "Which clause is used to filter groups in SQL?",
                                "WHERE",
                                "GROUP BY",
                                "HAVING",
                                "ORDER BY",
                                "HAVING"
                        ),
                        createQuiz(
                                "JavaScript",
                                "Easy",
                                "Which symbol is used for strict equality in JavaScript?",
                                "=",
                                "==",
                                "===",
                                "=>",
                                "==="
                        ),
                        createQuiz(
                                "JavaScript",
                                "Medium",
                                "Which method converts JSON text to a JavaScript object?",
                                "JSON.parse()",
                                "JSON.stringify()",
                                "JSON.toObject()",
                                "JSON.decode()",
                                "JSON.parse()"
                        )
                ));
            }
        };
    }

    private Quiz createQuiz(
            String category,
            String difficulty,
            String question,
            String option1,
            String option2,
            String option3,
            String option4,
            String answer
    ) {
        Quiz quiz = new Quiz();
        quiz.setCategory(category);
        quiz.setDifficulty(difficulty);
        quiz.setQuestion(question);
        quiz.setOption1(option1);
        quiz.setOption2(option2);
        quiz.setOption3(option3);
        quiz.setOption4(option4);
        quiz.setAnswer(answer);
        return quiz;
    }
}
