import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

export default function Home () {

    const navigate = useNavigate();

    return (

        <>

            <HomeBody>
                <HomeTitle>Olá, {/* {user.name} */}</HomeTitle>
                <NavigationButtons>
                    <Button onClick={() => navigate('/new-entrance')}>Nova entrada</Button>
                    <Button onClick={() => navigate('/new-withdraw')}>Nova saída</Button>
                </NavigationButtons>
            </HomeBody>

        </>

    );

}

const HomeBody = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

`;

const HomeTitle = styled.div`

    margin-top: 50px;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: #FFFFFF;

`;

const NavigationButtons = styled.div`

    position: fixed;
    margin-top: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    font-family: 'Roboto', sans-serif;
    font-weight: 600;

`;