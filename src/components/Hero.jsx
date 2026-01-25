import logo from '../assets/logo.png'
import heroVideo from '../assets/herobg.mp4'

const Hero = () => {
  return (
    <div className="hero">
       
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="container">
        <div className="hero_contant">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <h1>Ride the Next Wave of Digital Innovation</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero

