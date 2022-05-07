import Input from './Input';
import Button from './Button';
import Logo from './Logo';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import styled from 'styled-components';

export default function SignUp () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function refreshOnError () {
        window.location.reload(false);
    }

    function registerUser () {

        setLoading(true);
        const promise = axios.post('localhost:5000/sign-up', {
            email: email,
            name: name,
            password: password,
            confirm: confirm
        });

        promise.then (response => {
            setLoading(false);
            const { data } = response;
            console.log(data);
            navigate('/'); 
        })

        promise.catch (err => {
            setLoading(false);
            console.log(err);
            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
            refreshOnError();
        })

    }

    return (

        <SignUpContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Input type={'text'} placeholder={'Nome'} value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type={'email'} placeholder={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Input type={'password'} placeholder={'Confirme a senha'} value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
            <Button onClick={registerUser}>
                {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                    ) : (
                        'CADASTRAR'        
                    ) 
                }
            </Button>
            <StyledLink to='/'>Já possui uma conta? Entre!</StyledLink>
        </SignUpContainer>

    );

}

const LogoContainer = styled.div`

    margin-bottom: -50px;

`;

const SignUpContainer = styled.div`

    margin-top: 200px;
    margin-left: 7px;
    height: 100%;
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const StyledLink = styled(Link)`

    margin-top: 15px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;

`;