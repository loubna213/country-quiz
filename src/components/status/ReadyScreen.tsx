import { useQuiz } from '../../contexts/QuizContext'
import Button from '../Button';

const ReadyScreen = () => {
    const { dispatch } = useQuiz();

    return (
        <>
            <h1 className="text-white font-bold text-3xl">Country Quiz</h1>
            <p className="text-secondary-gray text-center">Take this Geography and travel quiz to test your knoledge of intresting country facts.</p>
            <Button onClick={() => dispatch({ type: "start"})} title="Start Game" />
        </>
    )
}

export default ReadyScreen
