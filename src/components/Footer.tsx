import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span className="footer-separator">·</span>
        <Link to="/terms">Terms of Service</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Scooby Studios LLC. All rights reserved.</p>
    </footer>
  )
}

export default Footer
