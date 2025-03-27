import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Reducer/Api Requests/OrderApiRequests";

const GetAll_Orders = () => {
  const allOrders = useSelector(state => state.OrderReducer.allOrders);
  const isLoading = useSelector(state => state.OrderReducer.isLoading);
  const [ordersArray, setOrdersArray] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllOrders()); }, []);
  useEffect(() => {
    if (!isLoading) {
      allOrders.data && setOrdersArray(allOrders.data);
      allOrders.paginationResult && setNumberOfPages(allOrders.paginationResult.numberOfPages);
    }
  }, [allOrders]);
  const getPage = async (page) => { await dispatch(getAllOrders(page)); console.log(page); };
  return [ordersArray, numberOfPages, getPage];
};

export default GetAll_Orders;
