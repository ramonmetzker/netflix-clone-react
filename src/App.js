import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";

import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //pegando lista total de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosenMovie = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosenMovie.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>
    </div>
  );
};
