import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <div className='container-fluid'>
        <Container>
          <Logo />
        </Container>

        <Container>
          <Menu />
        </Container>

        <Container>
          <Heading>FORMULARIO</Heading>
        </Container>

        <Container>
          <section>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nam commodi, voluptatibus quisquam, velit
            consequuntur ducimus facere soluta mollitia earum nisi, repellendus laborum! Consequuntur, molestiae
            obcaecati sed atque tenetur asperiores?
          </section>
        </Container>

        <Container>
          <Heading>FOOTER</Heading>
        </Container>
      </div>
    </>
  );
}
