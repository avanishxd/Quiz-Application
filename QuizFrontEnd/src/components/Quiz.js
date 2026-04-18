import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../constants';

function Quiz({ loggedInUserName, loggedInUserEmail }) {
  const marksPerDifficulty = {
    easy: 2,
    medium: 4,
    hard: 6,
  };

  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeStarted, setTimeStarted] = useState(null);
  const [quizTimeInSeconds, setQuizTimeInSeconds] = useState(0);
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const easyRes = await fetch('${API_BASE_URL}/question/difficulty/easy');
        const mediumRes = await fetch('${API_BASE_URL}/question/difficulty/medium');
        const hardRes = await fetch('${API_BASE_URL}/question/difficulty/hard');

        const easyQs = await easyRes.json();
        const mediumQs = await mediumRes.json();
        const hardQs = await hardRes.json();

        const selectedQuestions = [
          ...easyQs.slice(0, 15),
          ...mediumQs.slice(0, 10),
          ...hardQs.slice(0, 5),
        ];

        setQuestions(selectedQuestions);
        setTimeStarted(Date.now());
      } catch (err) {
        console.error('Error fetching questions:', err);
      }
    }
    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    setUserAnswers({ ...userAnswers, [questions[currentIndex].id]: answer });
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateScoreAndSend();
      setShowScore(true);
    }
  };

  const calculateScoreAndSend = async () => {
    let totalScore = 0;
    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach((q) => {
      if (
        userAnswers[q.id] &&
        userAnswers[q.id].toLowerCase() === q.answer.toLowerCase()
      ) {
        totalScore += marksPerDifficulty[q.difficulty.toLowerCase()] || 0;
        correctCount++;
      } else {
        wrongCount++;
      }
    });
    setScore(totalScore);

    const endTime = Date.now();
    const timeTaken = timeStarted ? Math.floor((endTime - timeStarted) / 1000) : 0;
    setQuizTimeInSeconds(timeTaken);

    const quizResult = {
      userName: loggedInUserName,
      userEmail: loggedInUserEmail,
      quizTitle: "Technical Quiz",
      answers: questions.map(q => ({
        questionId: q.id,
        selectedAnswer: userAnswers[q.id] || "",
      })),
      timeTaken: timeTaken
    };


    // try {
    //   const response = await axios.post('${API_BASE_URL}/quiz/submit', quizResult);
    //   setServerMessage(response.data.message || "Quiz submitted!");
    // } catch (err) {
    //   setServerMessage("Quiz submitted, but failed to send email.");
    // }
  };

    function sendScore(score) {
        axios.post(`${API_BASE_URL}/report/${score}`)
          .then(response => {
            console.log("Mail Sent") //
          })
          .catch(error => {
            console.error("Error sending score:", error);
            alert("Failed to send score");
          });
      }
    if(showScore){
      sendScore(score);
    }

  if (showScore) {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h2>Your Score: {score} / 100</h2>
        <p>{serverMessage}</p>
      </div>
    );
  }

  if (!questions.length) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div style={{ margin: '40px auto', maxWidth: 600, textAlign: 'center' }}>
      <h3>
        Question {currentIndex + 1} of {questions.length}
      </h3>
      <br/><br/><br/><br/><br/><br/><br/>
      <h2>{currentQuestion.question}</h2><br/><br/>
      <div>
        {[currentQuestion.option1, currentQuestion.option2, currentQuestion.option3, currentQuestion.option4].map(
          (option, idx) => (
            <button
              key={idx}
              style={{
                margin: 10,
                padding: '20px 30px',
                backgroundColor:
                  userAnswers[currentQuestion.id] === option ? '#E6D8C3' : '#F5F5F0',
              }}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          )
        )}
      </div>
      <br/><br/>
      <button
        onClick={nextQuestion}
        style={{ marginTop: 20, padding: '10px 20px', borderRadius: '20px' }}
        disabled={!userAnswers[currentQuestion.id]}
      >
        {currentIndex + 1 === questions.length ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

export default Quiz;
