import logo from './components/MyWalletLogo.png';
import styled from 'styled-components';

export default function Logo () {

    return (

        <LoginLogo >
            <img src={logo} alt={'login-logo'} height={39} width={179} />
        </LoginLogo >

    );

} 

const LoginLogo = styled.div`

    margin-top: -100px;
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;
    z-index: 1;

`;