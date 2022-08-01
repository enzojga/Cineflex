import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Time(props){
    console.log(props.id)
    return (
        <Schedule>
            <Day>{props.weekday} - {props.date}</Day>
            <Hours>
                {props.showtimes.map((hour) => <Link to={`/section/${hour.id}`}><Hour id = {hour.id}>{hour.name}</Hour></Link>)}
            </Hours>
        </Schedule>
    )
}

const Schedule = styled.div`
    display: flex;
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
`
const Hour = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin: 22px 8px 0 0;
`