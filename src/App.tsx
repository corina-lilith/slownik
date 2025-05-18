import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';


function App() {


  return (

    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route />


        </Routes>
      </Layout>
    </Router>


  )
}

export default App
