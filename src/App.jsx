import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '@pages/Landing';
import Deck from '@pages/Deck';
import Teachings from '@pages/Teachings';
import MovementsL1 from '@pages/MovementsL1';
import MovementsL2 from '@pages/MovementsL2';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/teachings" element={<Teachings />} />
        <Route path="/movements" element={<MovementsL1 />} />
        <Route path="/body" element={<MovementsL2 />} />
      </Routes>
    </BrowserRouter>
  );
}
