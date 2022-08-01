import { useParams,useNavigate  } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Seat from './Seat';
import axios from 'axios';
import styled from 'styled-components';
let newObj;

export default function Section(){

    const {idSessao} = useParams();
    const [section, setSection] = useState([]);
    const [movie, setMovie] = useState([]);
    const [seats, setSeats] = useState([]);
    const [day,setDay] = useState([]);
    const [selected,setSelected] = useState([]);
    const [seatName,setSeatName] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        const getPromisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        getPromisse.then((p)=>{
            setSection(...section,p.data)
            setMovie(...movie,p.data.movie);
            setDay(...day,p.data.day);
            setSeats(...seats,p.data.seats);
        }); 
    },[]);

    function postObj(e){
        e.preventDefault();
        const obj = {
            ids: selected,
            name: e.target[0].value,
            cpf: e.target[1].value       
        }
        if(selected.length === 0){
            alert('Selecione pelo menos um assento');
            return;
        }

        const postPromisse = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many',obj);
        newObj ={movieTitle: movie.title,
            date: day.date ,
            time: section.name,
            seatName: seatName,
            name: obj.name,
            cpf: obj.cpf};
        postPromisse.then((p)=>{navigate("/sucesso",{state:newObj})});
    }


    return(
        <Content>
            <h1>Selecione o(s) assento(s)</h1>
            <SeatsList>

                {seats.map((s,index) =>  <Seat key={index} id={s.id} name={s.name} isAvailable={s.isAvailable} setSelected={setSelected} selected={selected} setSeatName={setSeatName} seatName={seatName}/>)}

                <Exemples>
                    <Exemple>
                        <SeatStyle color={'#8DD7CF'}></SeatStyle>
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

            <Form onSubmit={postObj}>
                <label htmlFor="buyerName" >Nome do comprador:</label>
                <input type="text" id="buyerName" placeholder='Digite seu nome...' required/>
                <label htmlFor="campoCpf">CPF do comprador:</label>
                <input type="number" id="buyerCpf" placeholder='Digite seu CPF...' required/>
                <button type="submit">Reservar assento(s)</button>
            </Form>

            <Footer>
                <MovieBaner>
                    <img src={movie.posterURL}/>
                </MovieBaner>
                <div>
                    <h1>{movie.title}</h1>
                    <h1>{section.name} - {day.weekday}</h1>
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
  margin-top: 30px;

  h1{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
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
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    label{
        font-weight: 400;
        font-size: 18px;
        margin-top: 7px;
    }
    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        ::placeholder{
        font-weight: 400;
        font-size: 18px;
        font-style: italic;
    }
    }

    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border-style: none;
        color: white;
        font-size: 18px;
        justify-self: center;
        align-self: center;
        margin-top: 60px;

    }
` 