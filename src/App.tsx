import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo, React
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <Heading>Mussum impsum</Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero non eligendi ratione voluptas at aspernatur
        porro! Quisquam, debitis. Aut voluptate necessitatibus animi aperiam eius quis rem quas inventore totam
        laudantium.
      </p>
    </>
  );
}
