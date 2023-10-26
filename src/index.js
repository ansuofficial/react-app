import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar.js";
// import "./App.css";

const books = [
  {
    title: "Interesting Facts For Curious Minds",
    authur: "Jordan Moore",
    img: "https://m.media-amazon.com/images/I/71hwUY5ZmxL._SY342_.jpg",
    num: 20,
  },

  {
    title: "Killers of the Flower Moon",
    authur: " David Grann",
    img: "https://m.media-amazon.com/images/I/81Xy1ugiWeL._SY342_.jpg",
    num: 10,
  },
];

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((b) => {
        const { img, title, authur, children } = b;
        return (
        <Book img={img} title={title} authur={authur} />
        )
      })}
    </section>
  );
};

const Book = (props) => {
  const {img, title, authur, children} = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{authur}</h4>
      {children}
    </article>
  );
};

// const BookList = () => {
//   return (
//     <section>
//       <Navbar />
//       <div className="bookList">
//         <Book
//           authur={firstBook.authur}
//           title={firstBook.title}
//           img={firstBook.img}
//        />

//         <Book
//           authur={secondBook.authur}
//           title={secondBook.title}
//           img={secondBook.img}
//         ></Book>
//       </div>
//     </section>

//   );
// };

ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);
