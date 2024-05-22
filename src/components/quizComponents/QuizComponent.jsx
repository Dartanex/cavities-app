import { useRef, useState } from 'react'
import { data } from '../../utils/quizData'
import { Result } from 'postcss'



export const QuizComponent = () => {
    
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)

    let optionArray = [Option1, Option2, Option3]

    const checkAnswer = (e, ans) => {
        if(lock === false){
            if(question.ans === ans){
                // si es correcto se pinta de verde
                e.target.classList.add("border-green-500")
                e.target.classList.remove("border-slate-400")
                setLock(true)
                setScore(score+1)
            }else{
                // si es falso se pinta de rojo y resaltamos la respuesta correcta
                e.target.classList.add("border-red-500")
                e.target.classList.remove("border-slate-400")
                setLock(true)
                optionArray[question.ans-1].current.classList.add("border-green-500")
                optionArray[question.ans-1].current.classList.remove("border-slate-400")               
            }
        } 
    }

    const next = () => {
        if(lock === true){
            if(index === data.length-1){
                setResult(true)
                return 0
            }
            setIndex(++index)
            setQuestion(data[index])
            setLock(false)
            optionArray.map((option) => {
                option.current.classList.remove("border-green-500", "border-red-500")
                return null
            })
        }
    }

    const reset = () => {
        setIndex(0)
        setQuestion(data[0])
        setScore(0)
        setLock(false)
        setResult(false)
    }

    return (
        <>
            <section>
                <h1 className="text-white text-center text-xl font-bold p-2 pb-4 border-b border-slate-400">Mide tus conocimientos</h1>
                {
                    result ?
                    <>
                    </> :
                    <>
                        <div className="flex flex-col gap-5 w-11/12 p-2 mx-auto">
                            <h2 className="text-white text-center text-lg font-semibold">{index + 1}. {question.question}</h2>
                            <img className='border border-white rounded-md mx-auto w-1/2 mb-4' loading='lazy' src={question.image} 
                            alt="un tipo de caries" />
                            <ul>
                                <li ref={Option1} 
                                className="text-white flex items-center h-16 ps-4 mb-5 border-2 border-slate-400 rounded-md text-xl cursor-pointer"
                                onClick={(e) => {checkAnswer(e,1)}} >
                                    {question.option1}
                                </li>
                                <li ref={Option2} 
                                className="text-white flex items-center h-16 ps-4 mb-5 border-2 border-slate-400 rounded-md text-xl cursor-pointer"
                                onClick={(e) => {checkAnswer(e,2)}} >
                                    {question.option2}
                                </li>
                                <li ref={Option3}
                                className="text-white flex items-center h-16 ps-4 mb-5 border-2 border-slate-400 rounded-md text-xl cursor-pointer"
                                onClick={(e) => {checkAnswer(e,3)}} >
                                    {question.option3}
                                </li>
                            </ul>
                            <button className="text-white text-2xl font-semibold rounded-lg bg-indigo-500 w-64 h-16 p-2 px-4 m-auto cursor-pointer"
                            onClick={next} >
                            Siguente
                            </button>
                            <div className='m-auto'><p className="text-white">{index + 1} de {data.length} preguntas</p></div>
                        </div>
                    </>
                }
                {
                    result?<>
                        <div className='flex flex-col gap-5 w-11/12 p-2 mx-auto'>
                            <h2 className='text-white text-center text-lg font-semibold'>Tu puntaje es {score} correctas de {data.length}</h2>
                            <button onClick={reset}
                            className='text-white text-2xl font-semibold rounded-lg bg-indigo-500 w-64 h-16 p-2 px-4 m-auto cursor-pointer'>
                                Reiniciar
                            </button>
                        </div>
                    </>: <></>
                }
            </section>
        </>
    )
}
