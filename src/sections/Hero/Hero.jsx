import Button from '../../components/ui/Button/Button'
import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__inner'>
        <p className='hero__city'>
          Санкт-Петербург
        </p>
        <h1 className='hero__title'>Котейка</h1>
        <p className='hero__description'>Уютная гостиница для котов и кошек</p>
        <Button 
          label="Забронировать"
          mode="white"
          icon="/icons/paw.svg"
          location="hero"
          iconName="paw-orange"
          href="/"
        />
      </div>
    </section>
  )
}

export default Hero