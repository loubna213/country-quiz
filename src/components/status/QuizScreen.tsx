import { useQuiz } from "../../contexts/QuizContext"

const QuizScreen = () => {
    const { index, questions, dispatch } = useQuiz();
    const currentQuestion = questions[index]
    const answerOptions = [questions[index].name];
    
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor((Math.random() * 250) + 10)
        answerOptions.push(questions[randomNumber].name)
    }

    answerOptions.reverse();
    for (let i =0; i < answerOptions.length; i++) {
        let j = Math.floor(Math.random() * answerOptions.length);

        //swap
        let tmp = answerOptions[i];
        answerOptions[i] = answerOptions[j];
        answerOptions[j] = tmp;
    }

    return (
        <>
            <p className="text-secondary-gray font-semibold">Country Quiz.</p>
            <ul className="flex gap-4 mb-10">
                {   questions.slice(0,10).map((question) => (    
                        <li key={question.id} className={`text-white bg-primary-100 px-4 py-2 rounded-full ${( question.id == index + 1 || question.id < index + 1) && 'pink-gradiant'}`}>
                            {question.id}
                        </li>
                    ))   
                }
            </ul>

            <div className="text-white flex justify-center items-center flex-col gap-8">
                <h2 className="text-xl">Which country is <span className="font-bold">{currentQuestion.capital}</span> the capital?</h2>
                <div className="grid grid-cols-2 gap-6">
                    {
                        answerOptions.map((option: any) => (
                            <div key={option} onClick={() => dispatch({ type: 'answer', payload: option})} className="option">
                                <p>{option}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default QuizScreen
