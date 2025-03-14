import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdress } from "../../Reducer/Api Requests/AdressApiRequests";

const GetAllAdressHook = () => {
  const dispatch = useDispatch();
  const allAdress = useSelector(state => state.adressReducer.allAdress);
  const isLoading = useSelector(state => state.adressReducer.isLoading);

  useEffect(() => {
    dispatch(getAllAdress());
  }, []);
  

  return [allAdress];
};
export default GetAllAdressHook;