import './MoviesWrapper.css';


function MoviesWrappers(props) {
  return (
      <div className="movies-wrapper">{props.children}</div>
  );
}

export default MoviesWrappers;
