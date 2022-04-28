
import Header from './components/header.js'
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';
import Contacts from './components/contacts.js';
import Calculation from './components/calculation.js';
import About from './components/about.js';
import Main from './components/main.js';


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} exact />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path='/calculation' element={<Calculation />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
