import { Link } from 'react-router-dom'

interface HeaderProps {
  showBack?: boolean
}

function Header({ showBack }: HeaderProps) {
  return (
    <header className="header">
      {showBack ? (
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      ) : (
        <Link to="/" className="header-logo">
          Scooby Studios
        </Link>
      )}
    </header>
  )
}

export default Header
