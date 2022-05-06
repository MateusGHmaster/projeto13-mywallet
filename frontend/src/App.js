import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App () {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' />
                <Route path='/sign-up'/>
                <Route path='/home' />
                <Route path='/new-entrance' />
                <Route path='/new-withdraw' />
            </Routes>
        </BrowserRouter>

    );

}