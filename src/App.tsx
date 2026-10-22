import type React from 'react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import { HouseIcon, PlusCircleIcon, RotateCcwClockIcon, SettingsIcon, SunIcon } from 'lucide-react';
import './styles/theme.css';
import './styles/global.css';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { Button } from './components/Form/Buttons';
import { useState } from 'react';

export function App() {
  interface MenuData {
    url: string;
    icon: React.ReactNode;
  }

  const menu: MenuData[] = [
    {
      url: 'home',
      icon: <HouseIcon />,
    },
    {
      url: 'clock',
      icon: <RotateCcwClockIcon />,
    },
    {
      url: 'settings',
      icon: <SettingsIcon />,
    },
    {
      url: 'theme',
      icon: <SunIcon />,
    },
  ];

  // Sempre que eu usar useState, não vou usar atribuição diretamente
  const [numero, setNumero] = useState(() => {
    console.log('Lazy initialization');
    return 0;
  });

  function handleClick() {
    setNumero(prevState => prevState + 1);
  }

  return (
    <>
      <div className='container-fluid'>
        <Heading>Numero: {numero}</Heading>
        <Button icon={<PlusCircleIcon />} color='red' onClick={handleClick}></Button>
        <Container>
          <Logo />
        </Container>

        <Container>
          <Menu items={menu} />
        </Container>

        <Container>
          <CountDown />
        </Container>

        <Container>
          <Form numero={numero} />
        </Container>

        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}
