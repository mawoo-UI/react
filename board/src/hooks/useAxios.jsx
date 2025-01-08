import axios from "axios";
import React, { useCallback ,useState} from "react";

const BASE_URL = 'http://localhost:8080/api/v1/board';

const useAxios = (baseUrl = BASE_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const req = useCallback  ;
  

  async (method, endpoint, body =null, addheaders) => {
    setLoading(true)
    setError(null);
    try{
      const resp = await axios({
        method,
        url: `${baseUrl}${endpoint}`,
        data:body,
        headers: {
          'Content-Type':'application/json',
          ... addheaders
        }
      });
      setData(resp.data);
    }catch (err){
      setError(err);
    }finally {
      setLoading(false)
      }
    }
    ,[req];

    return {data, loading , error, req}

}
export default useAxios;