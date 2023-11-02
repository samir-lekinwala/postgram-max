import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Link to={`/`}>
          <h1>Postgram-max</h1>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default App
