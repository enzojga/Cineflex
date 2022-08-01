import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Menu(){
    const navigate = useNavigate()
    return(
        <Header>
            <ion-icon onClick={()=>{navigate('/')}} name="home-sharp" ></ion-icon>
            <h1>CINEFLEX</h1>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    color: #E8833A;
    position: relative;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon{
        position: absolute;
        top: auto;
        left: 10px;
    }

`
