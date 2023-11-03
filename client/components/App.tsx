import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <h1 className="title">Postgram-max</h1>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default App
