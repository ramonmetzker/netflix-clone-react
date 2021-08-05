import React from "react";
import "./FeaturedMovie.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal"></div>
      </div>
      {/* <div>{item.original_name}</div> */}
    </section>
  );
};
