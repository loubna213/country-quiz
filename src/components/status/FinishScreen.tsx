import { useQuiz } from "../../contexts/QuizContext"
import Button from "../Button";

const FinishScreen = () => {
    const { score, dispatch } = useQuiz();

    return (
        <>
            <img src="/congrats.svg" alt="congrats" />
            <h2 className="text-white text-2xl">Congrats!! You've completed the Quiz.</h2>
            <h2 className="text-white text-xl mb-8">Your score is : <span className="text-2xl">{score}</span> / 10</h2>
            <Button onClick={() => dispatch({ type: 'ready'})} title="Play Again" variant="pink-gradiant"/>
        </>
    )
}

export default FinishScreen
