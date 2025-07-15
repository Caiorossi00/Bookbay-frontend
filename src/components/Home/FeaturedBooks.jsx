import React from "react";
import BookItem from "./BookItem";
import "../../assets/styles/FeaturedBooks.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiLoader } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";

const FeaturedBooks = ({ books }) => {
  const featuredBooks = (books || []).filter((book) => book.isDestaque);

  return (
    <div className="-featured-book-list">
      <div className="featured-collection">
        <h1>Favoritos</h1>
      </div>

      <div className="featured-book-list-display">
        {!books || books.length === 0 ? (
          <div className="loading-spinner">
            <FiLoader className="spinner-icon" />
          </div>
        ) : featuredBooks.length === 0 ? (
          <p className="no-results">Nenhum livro destacado encontrado.</p>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default FeaturedBooks;
