import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: AliceBlue;
  margin-botton: 1rem;
`;

const Wrapper = styled.section`
font-size:1.5em;
padding:4em;
background:DarkOliveGreen;
text-align:center;
`

function App() {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
        ipsam ratione dolore laudantium quas? Id voluptatibus tenetur asperiores
        similique provident porro? Quasi rerum unde sapiente enim aliquid.
      </p>
    </Wrapper>
  );
}

export default App;
