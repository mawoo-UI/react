import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./component/board/List";
import Write from "./component/board/Write";


function App() {
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}/>
        <Route path="/" element={<Write /> } />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
