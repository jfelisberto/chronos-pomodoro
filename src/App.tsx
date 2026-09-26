import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Heading } from './components/Heading';

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
          <Heading>MENU</Heading>
        </Container>

        <Container>FORM</Container>

        <Container>
          <section>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nam commodi, voluptatibus quisquam, velit
            consequuntur ducimus facere soluta mollitia earum nisi, repellendus laborum! Consequuntur, molestiae
            obcaecati sed atque tenetur asperiores?
          </section>
        </Container>

        <Container>FOOTER</Container>
      </div>
    </>
  );
}
