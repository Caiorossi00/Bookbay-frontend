import React from "react";
import BookItem from "./BookItem";
import "../../assets/styles/FeaturedBooks.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FeaturedBooks = ({ books }) => {
  if (!books || books.length === 0) {
    return <p className="loading-placeholder">Carregando livros...</p>;
  }

  const featuredBooks = books.filter((book) => book.isDestaque);

  if (featuredBooks.length === 0) {
    return <p className="no-results">Nenhum livro destacado encontrado.</p>;
  }

  return (
    <div className="-featured-book-list">
      <div className="featured-collection">
        <h1>Favoritos</h1>
      </div>
      <div className="featured-book-list-display">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 1800, disableOnInteraction: false }}
        >
          {featuredBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <BookItem book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedBooks;
