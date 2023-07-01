import Image from 'react-bootstrap/Image';
import HeroBg from '../Assets/hero-bg.jpg'
import './heroStyles.css';

function Hero() {
  return <Image src={HeroBg} className='hero-img' rounded={true} fluid />;
}

export default Hero;