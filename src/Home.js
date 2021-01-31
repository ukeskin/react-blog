import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

  const {data: blogs, isPending} = useFetch('http://localhost:8000/blogs')


  return (
    <div className="home">
      { isPending && <h1>Loading...</h1>}
      { blogs && <BlogList blogs={blogs}/> }
    </div>
  );
}
 
export default Home;