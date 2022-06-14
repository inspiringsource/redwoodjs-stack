import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Button } from '@material-tailwind/react'
import Logo from 'web/public/uni-logo.png'
import './BlogLayout.css'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="fixed w-full pb-8 z-10">
        <nav className="grid bg-green-800 place-items-end pr-16 h-34 w-222">
          <img
            src={Logo}
            className="absolute left-7 top-7 h-24 w-24"
            alt="logo"
          />
          <ul className="flex items-center px-6 space-x-4 py-8">
            <Button
              onClick={() => navigate(routes.home())}
              className="w-20 h-14 text-white font-bold py-2 px-4 border-green-700 rounded bg-green-700 hover:bg-green-600"
            >
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
            </Button>
            <Button
              onClick={() => navigate(routes.about())}
              className="w-20 h-14 text-white font-bold py-2 px-4 border-green-700 rounded bg-green-700 hover:bg-green-600"
            >
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
            </Button>
            <Button
              onClick={() => navigate(routes.events())}
              className="w-20 h-14 text-white font-bold py-2 px-4 border-green-700 rounded bg-green-700 hover:bg-green-600"
            >
              <li>
                <Link to={routes.events()}>Events</Link>
              </li>
            </Button>
            <Button
              onClick={() => navigate(routes.contact())}
              className="w-24 h-14 text-white font-bold py-2 px-4 border-green-700 rounded bg-green-700 hover:bg-green-600"
            >
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
            </Button>
            <div className="absolute right-0 h-16 w-16 pt-6">
              {isAuthenticated ? (
                <div>
                  <span>Logged in as {currentUser.email}</span>{' '}
                  <Button type="button" onClick={logOut}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => navigate(routes.login())}
                  className="w-12 h-6 text-white py-1 px-1 text-xs hover:bg-purple-600"
                >
                  <li>
                    <Link to={routes.events()}>Login</Link>
                  </li>
                </Button>
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
