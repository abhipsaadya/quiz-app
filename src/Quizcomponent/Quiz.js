import { useState } from "react";

const Quiz = () => {
  var QuestionBank = [
    {
      question: "What is the capital of USA?",
      Answer: [
        { answer: "New Delhi", isCorrect: false },
        { answer: "Sanghai", isCorrect: false },
        { answer: "Washington, D.C.", isCorrect: true },
        { answer: "Miami", isCorrect: false },
      ],
    },
    {
      question: "Who is the CEO of Tesla?",
      Answer: [
        { answer: "Jeff Bazos", isCorrect: false },
        { answer: "Elon Musk", isCorrect: true },
        { answer: "Bill Gates", isCorrect: false },
        { answer: "Mark Zuckerberg", isCorrect: false },
      ],
    },
    {
      question: "Who is the Prime Minister of India? ",
      Answer: [
        { answer: "Nabin Pattanaik", isCorrect: false },
        { answer: "Mamata Banarjee", isCorrect: false },
        { answer: "Narendra Modi", isCorrect: true },
        { answer: "Pranab Mukharji", isCorrect: false },
      ],
    },
    {
      question: "Scientific formula of water?",
      Answer: [
        { answer: "H20", isCorrect: true },
        { answer: "K2SO4", isCorrect: false },
        { answer: "H2SO4", isCorrect: false },
        { answer: "CO2", isCorrect: false },
      ],
    },
    {
      question: "The iPhone was created by which company?",
      Answer: [
        { answer: "Samsung", isCorrect: false },
        { answer: "Apple", isCorrect: true },
        { answer: "Vivo", isCorrect: false },
        { answer: "Amazon", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuestionBank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const playAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
       
          <div className="score">
            You have scored {score} out of {QuestionBank.length}
            <>
              <button className="btn1" type="submit" onClick={playAgain}>
                Play Again
              </button>
            </>
          </div>
       
      ) : (
        <div className="whole">
          <div className="questions">
            <div className="question-number">
              <span>{currentQuestion}</span>/{QuestionBank.length}
            </div>
            <div className="questionText">
              {QuestionBank[currentQuestion].question}
            </div>
          </div>
          <div className="ans">
            <div className="answerOptions">
              {QuestionBank[currentQuestion].Answer.map((answers,index) => (
                <button
                  className="btn"
                  key={index}
                
                  onClick={() => handleAnswer(answers.isCorrect)}
                >
                  {answers.answer}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
