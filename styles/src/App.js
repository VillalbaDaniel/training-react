import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: AliceBlue;
  margin-botton: 1rem;
`;

const Paragraph = styled(Title)`
  color: YellowGreen;
`;

const Wrapper = styled.section.attrs((props) => ({
  id: "header",
  size: props.size || "1.5em",
}))`
  font-size: ${props=>props.size};
  padding: 4em;
  background: ${(props) =>
    props.darkTheme ? "DarkSlateGrey" : "DarkOliveGreen"};
  text-align: center;

  &:hover h1 {
    color: SkyBlue;
  }

  h1 {
    font-size: 1.5em;
    text-align: center;
    color: AliceBlue;
    margin-botton: 1rem;
  }

  p {
    color: YellowGreen;
  }
`;

function App() {
  return (
    <Wrapper darkTheme size="1.7em">
      <h1>Hello, World!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
        ipsam ratione dolore laudantium quas? Id voluptatibus tenetur asperiores
        similique provident porro? Quasi rerum unde sapiente enim aliquid.
      </p>
    </Wrapper>
  );
}

export default App;
