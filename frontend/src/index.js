import ReactDom from 'react-dom';
import App from './App';
import './components/reset.css';
import './components/style.css';

const MyWalletApp = App();
ReactDom.render(MyWalletApp, document.querySelector('.root'));