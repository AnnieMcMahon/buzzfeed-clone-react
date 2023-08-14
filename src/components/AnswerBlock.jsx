import { useEffect, useState } from 'react';

const AnswerBlock = ({ answerOptions, chosenAnswers }) => {

  const [result, setResult] = useState(null);

  useEffect(() => {
    answerOptions.forEach(answer => {
      if (chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2])) {
        setResult(answer);
      } else if (!result) {
        setResult(answerOptions[0])
      }
    })
  }, [result, answerOptions, chosenAnswers]);

  return (
    <div id="answer-block" className="answer-block">
      <h2>{result?.text}</h2>
      <img src={result?.image} alt={result?.text} />
    </div>
  )
}

export default AnswerBlock;