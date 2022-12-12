import classes from './App.module.css';

function App(props) {
  return (
    <section className={`${classes.header} ${props.dark && classes.darkTheme}`}>
         <h1 className={classes.sky}>Hello, World!</h1>
      <p className={classes.featured}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias
        ipsam ratione dolore laudantium quas? Id voluptatibus tenetur asperiores
        similique provident porro? Quasi rerum unde sapiente enim aliquid.
      </p>
    </section>
  );
}

export default App;
