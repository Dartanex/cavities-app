import { Header } from "../components/Header"

export const TypeCavitiesPage = () => {
  return (
    <>
        <Header />
        <main className=" mt-40">
            <section id="igdas">
                <h1 className="text-3xl">Caries Igdas</h1>
            </section>
            <section id="black">
                <h1 className="text-3xl">Caries black</h1>
            </section>
            <section id="monhHume">
                <h1 className="text-3xl">Caries Monh-Hume</h1>
            </section>
        </main>
    </>
  )
}
