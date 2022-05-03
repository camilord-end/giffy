import { useState, useEffect } from "react";
import { Gif } from "./Gif";
import getGifs from "../services/getGifs.js";

export const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) return <i>Loading</i>;

  return (
    <>
      {gifs.map(({ id, title, url }) => {
        return <Gif key={id} id={id} title={title} url={url} />;
      })}
    </>
  );
};
