import Header from '../components/Header'
import Footer from '../components/Footer'
import AppCard from '../components/AppCard'

function Home() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="hero">
          <h1>Scooby Studios</h1>
          <p className="tagline">Crafting innovative iOS experiences</p>
        </section>

        <section className="apps-section">
          <h2>Our Apps</h2>
          <div className="apps-grid">
            <AppCard
              name="LineWatch"
              description="Compare the best odds across sportsbooks. Find value, track lines, and make smarter bets."
              url="https://steven-nguyen22.github.io/LineWatch-Website/"
            />
          </div>
        </section>

        <section className="about-section">
          <h2>About</h2>
          <p>
            Scooby Studios LLC is a mobile app development studio focused on
            building polished, high-quality iOS applications. We design and
            develop apps that solve real problems with clean interfaces and
            thoughtful user experiences.
          </p>
          <p>
            Get in touch:{' '}
            <a href="mailto:steve.huu.nguyen@gmail.com">
              steve.huu.nguyen@gmail.com
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
