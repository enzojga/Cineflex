import styled from "styled-components"
import { useState } from "react";

export default function Seat(props){
    
    const [placeClicked, setPlaceClicked] = useState(false);
    const [color, setColor] = useState((props.isAvailable)? '#C3CFD9': '#FBE192');
    function reservaAssento(){
        if(props.isAvailable === false){
            alert('Esse assento não está disponível');
            return;
        }
        if(placeClicked === true){
            props.setSelected(props.selected.filter((place) => place.name));
            props.setSeatName(props.selected.filter((place) => place.name));
            setPlaceClicked(false);
            setColor('#C3CFD9')
            return;
        }
        setPlaceClicked(true);
        props.setSelected([...props.selected,props.id]);
        props.setSeatName([...props.seatName,props.name]);
        setColor('#8DD7CF');
    }
    

    return(
        <SeatStyle color={color} onClick={reservaAssento}>{props.name}</SeatStyle>
    )
}

const SeatStyle = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    background: ${props => props.color};
    border-radius: 50%;
    margin: 18px 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
`