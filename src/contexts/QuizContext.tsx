import React, { useEffect, useContext, useReducer, createContext } from "react"


interface Question {
    id: number,
    name: string,
    capital: string,
}

interface InitialState {
    questions: Question[],
    status: string,
    index: number,
    score: number,
    answer: string,
    userAnswer: string,
}

const initialState: InitialState = {
    questions: [],
    status: 'start',
    score: 0,
    index: 0,
    answer: '',
    userAnswer: '',
}

interface ContextProps extends InitialState {
    dispatch: React.Dispatch<Action>;
}

const QuizContext = createContext<ContextProps | undefined>(undefined);


interface Action {
    type: string,
    payload?: any,
}

const reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
        case 'ready':
            return { ...state, status: 'ready' }
        case 'getQuestion':
            return { ...state, questions: action.payload }
        case 'answer':
            const isCorrect = state.questions[state.index].name === action.payload;
            // Increment index only if the answer is correct
            const nextIndex = action.payload ? state.index + 1 : state.index;
            
            return { 
                ...state, 
                answer: state.questions[state.index].name, 
                userAnswer: action.payload, 
                index: nextIndex, 
                score: state.score + (isCorrect ? 1 : 0)
            };
            case 'finish':
                return { ...state, status: 'finish'}
        default:
            throw new Error('Unknown Action')
    }
}

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { questions, status, answer, userAnswer, score, index } = state;

    let counter = 1;

    useEffect(() => {
        async function getQuestions() {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all")
                const data = await res.json();

                const countryData = data.map((country: any) => {
                    const capital = country.capital ? country.capital[0] : "No capital";
                    
                    return { id: counter++, name: country.name.common, capital: capital };
                })
                
                dispatch({ type: "getQuestion", payload: countryData})
            } catch (error) {
                console.log(error) 
            }
        }
        getQuestions();
    }, [ ])

    console.log(questions)

    return (
        <QuizContext.Provider value={{
            questions,
            status,
            answer,
            userAnswer,
            score,
            index,
            dispatch,
        }}>
            { children }
        </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    const context = useContext(QuizContext);

    if(context === undefined) {
        throw new Error('QuizContext was used outside its QuizProvided')
    }

    return context;
}

export default QuizProvider;
