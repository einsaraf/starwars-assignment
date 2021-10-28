import "./styles/TableOfContent.css";

export default function MovieThumbnail(props) {

  const {
    title,
    index,
    movies,
    selectedElement,
    setSelectedMovie
  } = props;

  const classExpression = `side-bar-button ${index === 0 && !selectedElement.current ? 'selected' : ''}`;

  return (
    <div className={classExpression}
         onClick={(e) => {
           setSelectedMovie(movies[index]);
           if(selectedElement.current) {
             selectedElement.current.classList.remove('selected');
           }
           e.target.classList.add('selected');
           selectedElement.current = e.target;
         }}
    >
      {
        title
      }
    </div>
  )
}