
import Header from './components/header.js'
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Contacts from './components/contacts.js';
import Calculation from './components/calculation.js';
import About from './components/about.js';
import Main from './components/main.js';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                        <Route path='/' element={<Main />}/>
                        <Route path="/contacts" element={<Contacts />} exact />
                        <Route path='/calculation' element={<Calculation />} />
                        <Route path='about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
