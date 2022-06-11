import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between p-4">
          <h1 className="px-6 text-6xl">
            <Link to={routes.home()}>Example</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul className="flex items-center px-6 space-x-4 py-8">
            <button
              onClick={() => navigate(routes.home())}
              className="w-1/12 h-14 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
            </button>
            <button
              onClick={() => navigate(routes.about())}
              className="w-1/12 h-14 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
            </button>
            <button
              onClick={() => navigate(routes.events())}
              className="w-1/12 h-14 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.events()}>Events</Link>
              </li>
            </button>
            <button
              onClick={() => navigate(routes.contact())}
              className="w-1/12 h-14 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
            </button>
          </ul>
        </nav>
      </header>
      <main className="p-12">{children}</main>
    </>
  )
}

export default BlogLayout
