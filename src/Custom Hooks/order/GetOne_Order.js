import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrder } from "../../Reducer/Api Requests/OrderApiRequests";
import { useParams } from "react-router";

const GetOne_Order = () => {
  const { id } = useParams();
  const oneOrder = useSelector(state => state.OrderReducer.oneOrder);
  const isLoading = useSelector(state => state.OrderReducer.isLoading);
  const [orderDetails, setOrderDetails] = useState({});
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getOneOrder(id)); }, []);
  useEffect(() => {
    if (!isLoading) { if (oneOrder.data) { setOrderDetails(oneOrder.data); } }
  }, [oneOrder]);

  return [orderDetails];
};

export default GetOne_Order;
