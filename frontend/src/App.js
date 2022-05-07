import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import NewEntrance from './NewEntrance';
import NewWithdraw from './NewWithdraw';

export default function App () {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login /> } />
                <Route path='/sign-up' element={ <SignUp /> }/>
                <Route path='/home' element={ <Home /> }/>
                <Route path='/new-entrance' element={ <NewEntrance /> }/>
                <Route path='/new-withdraw' element={ <NewWithdraw /> } />
            </Routes>
        </BrowserRouter>

    );

}