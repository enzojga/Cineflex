import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Time(props){
    return (
        <Schedule>
            <Day>{props.weekday} - {props.date}</Day>
            <Hours>
                {props.showtimes.map((hour,index) => <Link key={index} to={`/assentos/${hour.id}`}><Hour id = {hour.id} Styled={{textDecoration :'none'}} > <p>{hour.name}</p> </Hour></Link>)}
            </Hours>
        </Schedule>
    )
}

const Schedule = styled.div`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    width: 100%;
    margin: 0 0 23px 23px
    
`

const Day = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`

const Hours = styled.div`
    display:flex ;
    width: 100%;
    text-decoration: none;
    p{
        text-decoration: none;
    }
`
const Hour = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: none;
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin: 22px 8px 0 0;
    a{
        text-decoration: none;
    }
`