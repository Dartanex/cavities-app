import { Route, Routes } from 'react-router-dom'
import { StartPage } from './pages/StartPage'
import { HomePage } from './pages/HomePage'
import { CavitiesPage } from './pages/CavitiesPage'
import { QuizPage } from './pages/QuizPage'
import { TypeCavitiesPage } from './pages/TypeCavitiesPage'


function App() {

  /*const routes = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/cavities', element: <CavitiesPage /> },
    { path: '/dentalcare', element: <DentalCarePage />},
    { path: '/home', element: <QuizPage /> }
  ])*/
  return (
    <>
      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/cavities" element={<CavitiesPage />} />
        <Route exact path='/typecavities' element={<TypeCavitiesPage />} />
        <Route exact path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  )
}

export default App
