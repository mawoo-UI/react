import axios from "axios";
import React, { useCallback ,useState} from "react";
import { useAuth } from "./AuthContext";

const BASE_URL = 'http://localhost:8080/api/v1/';

const useAxios = (baseUrl = BASE_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {token} = useAuth();


  // const tmpToken ='eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MzY4MTc5ODMsImV4cCI6MTczOTQ5NjM4Mywic3ViIjoidXNlcjFAb25ld2Vla3MuY29rciJ9.U90Loz7pIIaNvnm0oJmlIkukdUSyxW60kEBxN362u4hug2VfXPH1m1vjpGvoqteU'

  const req = useCallback (
    async (method, endpoint, body = null, addheaders = {}) => {
      setLoading(true)
      setError(null);
    try{
      const resp = await axios({
        method,
        url: `${baseUrl}${endpoint}`,
        data:body,
        headers: {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`,
          ... addheaders
        }
      });
      setData(resp.data);
      return resp.data;
    } catch (err){
      setError(err);
    } finally {
      setLoading(false)
    }
  }, 
  [baseUrl]);
  
  return {data, loading , error, req}
  
}
export default useAxios;