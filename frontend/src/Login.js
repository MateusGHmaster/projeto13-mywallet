import { useState } from 'react';
import { useNavigate, Link }  from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import LoadingSpin from 'react-loading-spin';
import Input from './Input';
import Button from './Button';
import Logo from './Logo';

export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function loginUser () {

        setLoading(true);
        const promise = axios.post ('localhost:5000/login', {
            email: email,
            password: password
        });

        promise.then (response => {
            setLoading(false);
            const { data } = response;
            console.log(data);
            /* setToken(data.token);
            setUser(data); */
            navigate('/home');
        })

        promise.catch (err => {
            setLoading(false);
            console.log(err);
            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
        })
    }

    return (

        <LoginContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Input type={'text'} placeholder={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={loginUser}>
                {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                    ) : (
                        'Entrar'        
                    ) 
                }
            </Button>
            <StyledLink to='/sign-up'>Primeira vez? Cadastre-se!</StyledLink>
        </LoginContainer>

    );

}

const LogoContainer = styled.div`

    margin-bottom: -50px;

`;

const LoginContainer = styled.div`

    height: 100vh;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const StyledLink = styled(Link)`

    height: 15px;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;

`;