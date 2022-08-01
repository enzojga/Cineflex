import styled from 'styled-components';
import Movie from './Movie';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MainPage(){

    const [movies, setMovies] = useState([]);
    useEffect(() =>{
      const getPromisse = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
      getPromisse.then(p => {setMovies(p.data)});
    },[])
    return(
        <Content>
            <h1>Selecione o filme</h1> 
            <MovieList>
              {movies.map((movies,index) => <Link key={index} to={`/sessoes/${movies.id}`}><Movie img = {movies.posterURL} title = {movies.title} id = {movies.id} overview = {movies.overview} releaseDate = {movies.releaseDate}/></Link>)}
            </MovieList>
        </Content>
    )
} 


const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin: 30px 0 30px 0;
  }
`
const MovieList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

`