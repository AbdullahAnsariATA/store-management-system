import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './assets/Pages/Home'
import AddItem from './assets/Pages/AddItem'
import Navbar from './assets/Components/Navbar'

function App() {
    return (
            <BrowserRouter>
                    {/* <Navbar/> */}
                <Routes>
                    <Route path=''
                        element={<Home><Navbar/></Home>}/>
                    <Route path='add'
                        element={<AddItem><Navbar/></AddItem>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default App;