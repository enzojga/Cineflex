import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Seat from './Seat';
import axios from 'axios';
import styled from 'styled-components';

export default function Section(){

    const {sectionId} = useParams();
    const [section, setSection] = useState([]);
    const [movie, setMovie] = useState([]);
    const [seats, setSeats] = useState([]);
    const [day,setDay] = useState([]);
    const [selected,setSelected] = useState([]);
    console.log(selected);

    useEffect(() =>{
        const getPromisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sectionId}/seats`);
        getPromisse.then((p)=>{
            setSection(...section,p.data)
            setMovie(...movie,p.data.movie);
            setDay(...day,p.data.day);
            setSeats(...seats,p.data.seats);
        }); 
    },[])

    console.log(day);

    return(
        <Content>
            <h1>Selecione o(s) assento(s)</h1>
            <SeatsList>

                {seats.map((s) =>  <Seat id={s.id} name={s.name} isAvailable={s.isAvailable} setSelected={setSelected} selected={selected}/>)}

                <Exemples>
                    <Exemple>
                        <SeatStyle color={'#1AAE9E'}></SeatStyle>
                        <p>Selecionado</p>
                    </Exemple>

                    <Exemple>
                        <SeatStyle color={'#C3CFD9'}></SeatStyle>
                        <p>Disponivel</p>
                    </Exemple>

                    <Exemple>
                        <SeatStyle color='#F7C52B'></SeatStyle>
                        <p>Indisponivel</p>
                    </Exemple>

                </Exemples>
            </SeatsList>
            
            <Footer>
                <MovieBaner>
                    <img src={movie.posterURL}/>
                </MovieBaner>
                <div>
                    <h1>{movie.title}</h1>
                    <h1>{day.date}-{day.weekday}</h1>
                </div>
            </Footer>
        </Content>
    )
}

const MovieBaner = styled.div`
    width: 64px;
    height: 89px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0 14px 0 10px;
    img{
        width: 129px;
        height: 193px;
    }
`

const Footer = styled.div`
    height: 117px;
    width: 100%;
    bottom: 0;
    position: fixed;
    right: 0;
    background-color: #9EADBA;
    display: flex;
    align-items: center;
    img{
        width: 48px;
        height: 72px;
    }
    h1{
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
    }
    div{
        display: flex;
        flex-direction: column;
    }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 177px;

  h1{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin: 30px 0 30px 0;
  }
`
const SeatsList = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

`
const Exemples = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const Exemple = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  p{
    margin-top: 10px;
  }
`
const SeatStyle = styled.div`
    width: 26px;
    height: 26px;
    background: ${props => props.color};
    border: 1px solid #808F9D;
    border-radius: 50%;
    margin: 18px 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
`