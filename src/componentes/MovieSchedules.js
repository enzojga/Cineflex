import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from 'axios';
import Time from "./Time";
import { useParams } from 'react-router-dom';

export default function MovieSchedules(){

    const [times,setTimes] = useState([]);
    const [movieData, setMovieData] = useState([]);
    const {idFilme} = useParams();
    useEffect(() =>{
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);
        promisse.then((p) =>{
            setTimes(...times, p.data.days);
            setMovieData(...movieData, p.data);
        })
    },[]);
    return(
        <Content>
            <h1>Selecione o horário</h1>
            {times.map((day,index) => <Time key={index} id = {day.id} date = {day.date} showtimes = {day.showtimes} weekday = {day.weekday} />)}
            <Footer>
                <MovieBaner>
                    <img src={movieData.posterURL}/>
                </MovieBaner>
                <h1>{movieData.title}</h1>
            </Footer>
        </Content>
    )
}

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
`
