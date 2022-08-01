import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
export default function Success(){
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state;
    return(
        <Content>
            <h1>Pedido feito com sucesso!</h1>
            <OrderInfo>
                <h2>Filme e sessão</h2>
                <p>{orderData.movieTitle}</p>
                <p>{orderData.date} {orderData.time}</p>
                <h2>Ingressos</h2>
                {orderData.seatName.map((place,index) => <p key={index}>Assento {place}</p> )}
                <h2>Comprador</h2>
                <p>Nome: {orderData.name}</p>
                <p>Cpf: {orderData.cpf}</p>
            </OrderInfo>
            <button onClick={() =>navigate('/')}>Voltar pra Home</button>
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
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    margin: 30px 0 30px 0;
  }
  h2{
    font-weight: 700;
    font-size: 24px;
    margin: 40px 0 0 30px;
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
    p{
        font-size: 22px;
        margin: 5px 0 0 30px;
    }
`
const OrderInfo = styled.div`
    width: 100%;
`