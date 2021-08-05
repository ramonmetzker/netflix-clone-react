import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  useEffect(() => {
    const loadAll = async () => {
      //pegando lista total de filmes
      let list = await Tmdb.getHomeList();
      console.log(list);
    };

    loadAll();
  }, []);
  return <div>Olá Mundo!</div>;
};
