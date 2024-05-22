import { Header } from "../components/Header"
import { EstadioZero } from "../components/mountHumeEstadioComponents/EstadioZero"
import { EstadioOne } from "../components/mountHumeEstadioComponents/EstadioOne"
import { EstadioTwo } from "../components/mountHumeEstadioComponents/EstadioTwo"
import { EstadioThree } from "../components/mountHumeEstadioComponents/EstadioThree"
import { EstadioFour } from "../components/mountHumeEstadioComponents/EstadioFour"
import { Footer } from "../components/Footer"
import { EstadioSitioTable } from "../components/mountHumeEstadioComponents/EstadioSitioTable"

export const MountHumeCavities = () => {
  return (
    <>
        <Header />
        <main className="container mt-16 mx-auto bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 rounded-md p-2">
          <h1 className="text-white text-xl md:text-2xl text-center font-bold">Caries Según MOUNT-HUME</h1>
          <EstadioSitioTable />
          <EstadioZero />
          <EstadioOne />
          <EstadioTwo />
          <EstadioThree />
          <EstadioFour />
        </main>
        <div className="mb-[-3.5vh] md:mb-[-3vh]">
          <Footer />
        </div>
    </>
  )
}
