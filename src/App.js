import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import Skills from './components/Skills'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
