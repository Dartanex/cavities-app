import { Header } from "../components/Header"
import { CodeZero } from "../components/icdasCodesComponents/CodeZero"
import { CodeOne } from "../components/icdasCodesComponents/CodeOne"
import { CodeTwo } from "../components/icdasCodesComponents/CodeTwo"
import { CodeThree } from "../components/icdasCodesComponents/CodeThree"
import { CodeFour } from "../components/icdasCodesComponents/CodeFour"
import { CodeFive } from "../components/icdasCodesComponents/CodeFive"
import { CodeSix } from "../components/icdasCodesComponents/CodeSix"
import { Footer } from "../components/Footer"

export const IcdasCavities = () => {
  
  return (
    <>
        <Header />

        <main className="container mt-16 mx-auto max-w-screen-xl bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 rounded-md p-2">
          <h1 className="text-white text-xl md:text-2xl text-center font-bold"> Códigos de caries según ICDAS</h1>
          <CodeZero />
          <CodeOne />
          <CodeTwo />
          <CodeThree />
          <CodeFour />
          <CodeFive />
          <CodeSix />   
        </main>
        <div className="mb-[-3.5vh] md:mb-[-3vh]">
          <Footer />
        </div>
    </>
  )
}
