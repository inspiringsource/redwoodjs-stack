import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import Logo from 'web/public/uni-logo.png'
const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="fixed w-full pb-8 z-10">
        <nav className="grid bg-blue-500 place-items-end pr-16 h-34">
          <img
            src={Logo}
            className="absolute left-5 top-5 h-24 w-24"
            alt="logo"
          />
          <ul className="flex items-center px-6 space-x-4 py-8">
            <button
              onClick={() => navigate(routes.home())}
              className="w-20 h-14 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
            </button>
            <button
              onClick={() => navigate(routes.about())}
              className="w-20 h-14 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
            </button>
            <button
              onClick={() => navigate(routes.events())}
              className="w-20 h-14 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.events()}>Events</Link>
              </li>
            </button>
            <button
              onClick={() => navigate(routes.contact())}
              className="w-24 h-14 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
            </button>
            <div className="absolute right-0 h-16 w-16 pt-6">
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
          </ul>
        </nav>
      </header>
      <main className="p-12">{children}</main>
    </>
  )
}

export default BlogLayout
