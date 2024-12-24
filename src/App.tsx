

import FinishScreen from "./components/status/FinishScreen"
import QuizScreen from "./components/status/QuizScreen"
import ReadyScreen from "./components/status/ReadyScreen"
import { useQuiz } from "./contexts/QuizContext"

function App() {
  const { questions, status, index } = useQuiz()
  
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center" style={{background: 'url(/bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="gray-container">
        { status === 'ready' && <ReadyScreen /> }
        { questions.length > 0 && (status === 'start' && index < 10 ) && <QuizScreen/> }
        { index === 10 && <FinishScreen/>}

      </div>
    </section>
  )
}

export default App
