import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="line" />
        </header>
        <Routes>
          {/* <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<Myprofile />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
