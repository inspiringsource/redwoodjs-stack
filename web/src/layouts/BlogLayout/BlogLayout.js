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
                  className="w-12 h-6 text-white py-1 px-1 text-xs hover:text-black hover:bg-white"
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
      <footer className="p-4 bg-gray-300 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 h-6 fixed inset-x-0 bottom-0">
        <span className="pt-1 text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <a href="/" className="hover:underline">
            Demo
          </a>
          . All Rights Reserved.
        </span>
        <ul className="pt-4 flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to={routes.about()} className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Careers
            </Link>
          </li>

          <li>
            <Link to={routes.contact()} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default BlogLayout
