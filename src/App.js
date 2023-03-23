import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList";
import Navbar from "./Navbar";
import CreatePostForm from "./CreatePostForm";
import { useState } from "react";

function App() {
  var [postData, setPostData] = useState([
    {
      user: "Favour ThankGod",
      body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
    },
    {
      user: "Elizabeth Queen",
      body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
    },
    {
      user: "Genius Dephx",
      body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
    },
    {
      user: "Django Lover",
      body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
    },
    {
      user: "Favour ThankGod",
      body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
    },
    {
      user: "Favour ThankGod",
      body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
    },
    {
      user: "Favour ThankGod",
      body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <PostList postData={postData} />
      <CreatePostForm postData={postData} setPostData={setPostData} />
    </div>
  );
}

export default App;
