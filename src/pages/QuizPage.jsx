import { Header } from "../components/Header"
import { QuizComponent } from "../components/quizComponents/QuizComponent"
import { Footer } from "../components/Footer"

export const QuizPage = () => {

    return(
        <>
            <Header />
            <main className="container mx-auto mt-14 sm:mt-20 md:mt-28 lg:mt-28 bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 h-auto rounded-md p-2">
                <QuizComponent />
            </main>
            <div className="mb-[-3.5vh] md:mb-[-3vh]">
                <Footer />
            </div>
        </>
    )
}