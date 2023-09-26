import { auth } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  const { userId } = auth()
  return (
    <>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="text-purple-300 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-purple-300 hover:text-white mr-4"
                >
                  Dashboard
                </Link>
                <Link
                  href="/courses"
                  className="text-purple-300 hover:text-white mr-4"
                >
                  Courses
                </Link>
                <Link
                  href="/repos"
                  className="text-purple-300 hover:text-white mr-4"
                >
                  repository
                </Link>
                <Link
                  href="/profile"
                  className="text-purple-300 hover:text-white mr-4"
                >
                  profile
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
