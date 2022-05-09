import Input from './Input';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from "styled-components";

export default function NewEntrance () {

    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    return (

        <Entrance>
            <PageTitle>Nova entrada</PageTitle>
            <Input type={'text'} placeholder={'Valor'} value={value} onChange={(e) => setValue(e.target.value)}/>
            <Input type={'text'} placeholder={'Descrição'} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <Button onClick={navigate('/home')}>Salvar entrada</Button>
        </Entrance>

    );

}

const Entrance = styled.div`

    margin-left: 15px;

`;

const PageTitle = styled.div`

    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: #FFFFFF;

`;