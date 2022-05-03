export const Gif = ({ title, id, url }) => {
  return (
    <a href={`/gif/${id}`} className="gif">
      <h4 className="gif-tittle">{title}</h4>
      <img src={url}/>
    </a>
  );
};
