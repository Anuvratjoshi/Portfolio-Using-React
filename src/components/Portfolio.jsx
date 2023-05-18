import React from "react";
import laundryCart from "../assets/portfolio/laundryCart.jpg";
import carRantal from "../assets/portfolio/carRantal.jpg";
import movieSearcher from "../assets/portfolio/movieSearcher.jpg";
import imageSearcher from "../assets/portfolio/imageSearcher.jpg";
import expenseTracker from "../assets/portfolio/expenseTracker.jpg";
import todoList from "../assets/portfolio/todoList.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: laundryCart,
      projectLink:"https://laundry-cart.netlify.app/",
      sourceCode:"https://drive.google.com/file/d/1X_DwxrLRMahhmteqaFiP143mPKoBFyCi/view?usp=share_link"
    },
    {
      id: 2,
      src: carRantal,
      projectLink:"https://anuvrat-car-rental.netlify.app/",
      sourceCode:"https://drive.google.com/file/d/1J-wFhwmsH5vQ0kbGUlksiRi9qObIKgF5/view?usp=share_link"
    },
    {
      id: 3,
      src:  movieSearcher,
      projectLink:"https://snapshot-n7bm.onrender.com",
      sourceCode:"https://github.com/Anuvratjoshi/React-Movie-Search/tree/master"
    },
    {
      id: 4,
      src: expenseTracker,
      projectLink:"https://react-movie-search-00hm.onrender.com",
      sourceCode:"https://github.com/Anuvratjoshi/Expense-Tracker/tree/master"
    },
    {
      id: 5,
      src: imageSearcher,
      projectLink:"https://ecpense-tracker.onrender.com",
      sourceCode:"https://github.com/Anuvratjoshi/snapshot/tree/master"
    },
    {
      id: 6,
      src: todoList,
      projectLink:"https://react-todo-app-qsiz.onrender.com",
      sourceCode:"https://github.com/Anuvratjoshi/Todo-App/tree/master"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , projectLink,sourceCode}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={projectLink} rel="noreferrer" target="_blanck">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a className="" href={sourceCode} rel="noreferrer" target="_blanck">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;