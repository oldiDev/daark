
import Header from './components/header.js'
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Contacts from './components/contacts.js';
import Calculation from './components/calculation/calculation.js';
import About from './components/about.js';
import Main from './components/main.js';
import Pims from './components/projects/pims.js';
import Woodcoin from './components/projects/woodcoin.js';
import Vpn from './components/projects/vpn.js';


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} exact>
                        {/* <Route path="pims" element={<Pims />} /> */}
                    </Route>
                    <Route path="/pims" element={<Pims />} />
                    <Route path="/woodcoin" element={<Woodcoin />}></Route>
                    <Route path='/vpn' element={<Vpn />}></Route>
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path='/calculation' element={<Calculation />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
