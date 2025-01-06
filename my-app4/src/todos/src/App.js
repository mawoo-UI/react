import {BrowserRouter,Touter, Toutes} from "react=router-dom";
import Index from "../../component/Index";
import Posts from "../../component/Posts";
import PostsDetail from "../../component/PostsDetail";
import  Header  from "../../component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router>
        <Router path="/" element={<Index />}/>
        <Router path="/post" element={<Posts />} />
        <Router path="/post/:id" element={<PostsDetail />}/>
      </Router>
    </BrowserRouter>
  );
}

export default App;
