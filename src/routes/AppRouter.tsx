import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../page/home/HomePage'
import { IntroPage } from '../page/introduction/IntroPage'

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='introduccion-a-la-programacion' element={<IntroPage />} />
      <Route path='*' element={<h2>404 not found</h2>} />
    </Routes>
  )
}
