import App from './components/App'
import Posts from './components/Posts'
import Add from './components/Add'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Posts />} />
      <Route path="add" element={<Add />} />
    </Route>
  )
)

export default router
