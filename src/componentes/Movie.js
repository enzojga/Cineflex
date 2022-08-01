import styled from 'styled-components';

export default function Movie(props){
    return(
        <MovieBaner>
            <img src={props.img} alt=''/>
        </MovieBaner>
    )
}

const MovieBaner = styled.div`
    width: 145px;
    height: 209px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    img{
        width: 129px;
        height: 193px;
    }
`