<<<<<<< HEAD
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Index from "./component/Index";
import PostDetail from "./component/PostDetail";
import Header from "./component/Header";
import Posts from "./component/Posts";
=======
import {BrowserRouter,Touter, Toutes} from "react=router-dom";
import Index from "../../component/Index";
import Posts from "../../component/Posts";
import PostsDetail from "../../component/PostsDetail";
import  Header  from "../../component/Header";
>>>>>>> refs/remotes/origin/master
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
=======
      <Router>
        <Router path="/" element={<Index />}/>
        <Router path="/post" element={<Posts />} />
        <Router path="/post/:id" element={<PostsDetail />}/>
      </Router>
>>>>>>> refs/remotes/origin/master
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> refs/remotes/origin/master
