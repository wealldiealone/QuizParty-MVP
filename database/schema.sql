CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('participant', 'organizer') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Quizzes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    time_limit INT,
    organizer_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (organizer_id) REFERENCES Users(id)
);

CREATE TABLE Questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    quiz_id INT,
    question_text TEXT NOT NULL,
    image_url VARCHAR(255),
    question_type ENUM('single', 'multiple') NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES Quizzes(id)
);

CREATE TABLE Answers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT,
    answer_text VARCHAR(255) NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (question_id) REFERENCES Questions(id)
);

CREATE TABLE Rooms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    room_code VARCHAR(10) UNIQUE NOT NULL,
    quiz_id INT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (quiz_id) REFERENCES Quizzes(id)
);

CREATE TABLE Results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    quiz_id INT,
    score INT DEFAULT 0,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (quiz_id) REFERENCES Quizzes(id)
);