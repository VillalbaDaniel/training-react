import './MoviesAction.css';

function MoviesAction(props) {
  return (
    <div className="actions">
    <button onClick={props.noFilter}>All</button>
    <button onClick={props.onFilterComedy}>Comedy</button>
    <button onClick={props.onFilterDrama}>Drama</button>
  </div>
  );
}

export default MoviesAction;
