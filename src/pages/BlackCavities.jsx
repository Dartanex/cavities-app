import { ClassFive } from "../components/blackClassComponents/ClassFive"
import { ClassFour } from "../components/blackClassComponents/ClassFour"
import { ClassOne } from "../components/blackClassComponents/ClassOne"
import { ClassThree } from "../components/blackClassComponents/ClassThree"
import { ClassTwo } from "../components/blackClassComponents/ClassTwo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const BlackCavities = () => {
  return (
    <>
        <Header />
        <main className="container mt-16 mx-auto max-w-screen-xl bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 rounded-md p-2">
          <h1 className="text-white text-xl md:text-2xl text-center font-bold">Caries Según BLACK</h1>
          <ClassOne />
          <ClassTwo />
          <ClassThree />
          <ClassFour />
          <ClassFive />
        </main>
        <div className="mb-[-3.5vh] md:mb-[-3vh]">
          <Footer />
        </div>
    </>
  )
}
