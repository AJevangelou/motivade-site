import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Statistics from './components/Statistics'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import Support from './components/Support'

const path = window.location.pathname

function App() {
  if (path === '/privacy-policy') {
    return <PrivacyPolicy />
  }

  if (path === '/support') {
    return <Support />
  }

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <Statistics />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
