import styled from 'styled-components';

export default function Menu(){
    return(
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

`
