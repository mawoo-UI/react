import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./component/board/List";
import Write from "./component/board/Write";
import LoginForm from "./component/member/LoginForm";
import Dashboard from "./component/common/Dashboard";
import { AuthProvider } from "./hooks/AuthContext";
import ProtectedRoute from "./component/common/ProtectedRoute";
import View from "./component/board/View";
import Modify from "./component/board/Modify";

function App() {
  return( 
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/notes" element={
          <ProtectedRoute>
            <List />
          </ProtectedRoute>
          }/>
        <Route path="/notes/:num" element={
          <ProtectedRoute>
            <View />
          </ProtectedRoute>
         }/>
        <Route path="/notes/:num" element={
          <ProtectedRoute>
            <Modify />
          </ProtectedRoute>
         }/>
        <Route path="/write" element={
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
          } />
        {/* <Route path="*" element={<NotFound /> } /> */}
      </Routes>
      </AuthProvider>
    </BrowserRouter>   
  );
}

export default App;
