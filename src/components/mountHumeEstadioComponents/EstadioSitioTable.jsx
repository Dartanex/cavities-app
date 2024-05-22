export const EstadioSitioTable = () => {
  
    return (
        <>
            <section className="border-b border-slate-400 p-2">
            <h2 className="text-xl text-white font-bold ms-6">Estadio</h2>
            <div className="flex flex-row flex-nowrap">
              <h2 className="text-xl text-white h-fit my-auto font-bold rotate-[270deg]">Sitio</h2>
              <div className="w-full">
                <table className="text-white font-semibold border-separate text-center">
                  <tbody>
                    <tr>
                      <td className="border-b border-e border-white w-16 md:w-28">1.0</td>
                      <td className="border-b border-e border-white w-16 md:w-28">1.1</td>
                      <td className="border-b border-e border-white w-16 md:w-28">1.2</td>
                      <td className="border-b border-e border-white w-16 md:w-28">1.3</td>
                      <td className="border-b border-white w-16 md:w-28">1.4</td>
                    </tr>
                    <tr>
                      <td className="border-b border-e border-white w-16">2.0</td>
                      <td className="border-b border-e border-white w-16">2.1</td>
                      <td className="border-b border-e border-white w-16">2.2</td>
                      <td className="border-b border-e border-white w-16">2.3</td>
                      <td className="border-b border-white w-16">2.4</td>
                    </tr>
                    <tr>
                      <td className="border-e border-white w-16">3.0</td>
                      <td className="border-e border-white w-16">3.1</td>
                      <td className="border-e border-white w-16">3.2</td>
                      <td className="border-e border-white w-16">3.2</td>
                      <td className="w-16">3.4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
                <h2 className="text-white font-bold text-lg">Localización de lesiones cariosas por sitios</h2>
                <ul className=" text-white font-base ">
                    <li>Sitio 1 = Fosas y fisuras</li>
                    <li>Sitio 2 = Proximal de todos los dientes</li>
                    <li>Sitio 3 = Tercio gingival coronal y radicular por vestibular y lingual</li>
                </ul>
            </div>
          </section>
        </>
    )
}
