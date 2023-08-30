import AnimatedPages from "../AnimatedPages/AnimatedPages"
import './Home.css'
import img from '../../assets/LOGO ATOJ.png';
import Card from "./Card";
import Text from "./Text";
import Separator from "./Separator";
import CarouselComponent from "./Carousel";
import ServiceLink from "./serviceLink";

const Home = () => {

  return (
    <AnimatedPages>
      <section id="home">
        <div className="presentacion">
          <h1>Logo y Bienvenida</h1>
        </div>
          <Card image={img} text={'Nombre'}/>
          <Text content={'Texto'} />
          <Card image={img} text={'Nombre'}/>
          <Text content={'Texto'} />
          <Separator />
          <CarouselComponent />
          <Separator />
          <ServiceLink title={'Servicio 1'} content={'Diseño de Logotipo'} url={'/'} />
          <ServiceLink title={'Servicio 2'} content={'Diseño de Contenido'} url={'/'} />
          <ServiceLink title={'Servicio 3'} content={'Gestión de redes'} url={'/'} />
      </section>
    </AnimatedPages>
   
  )
}

export default Home