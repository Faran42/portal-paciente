import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url('https://images.unsplash.com/photo-1576091160501-bbe57469278b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;

  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;

export const Card = styled.div`
  width: 50%;
  height: 30vh;

  background-color: rgba(2,2,2,0.5);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;


  opacity: 1;
  margin-right: 2%;

  border-radius: 20px;


`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  font-family: cursive;
  color: #fff;

  font-style: italic;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;

  opacity: 1;

`;

