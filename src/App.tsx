import type React from 'react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import { HouseIcon, RotateCcwClockIcon, SettingsIcon, SunIcon } from 'lucide-react';
import './styles/theme.css';
import './styles/global.css';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

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

  return (
    <>
      <div className='container-fluid'>
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
          <Form />
        </Container>

        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}
