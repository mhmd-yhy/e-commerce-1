import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems } from "../../Reducer/Api Requests/CartApiRequests";

const GetAllCartItemsHook = () => {
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.CartReducer.getAllItems);
  const isLoading = useSelector(state => state.CartReducer.isLoading);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartID, setCartID] = useState("");

  useEffect(() => { const run = async () => { await dispatch(getAllCartItems()); }; run(); }, []);

  useEffect(() => {
    if (!isLoading) {
      if (allItems?.numOfCartItems) setNumOfCartItems(allItems.numOfCartItems); else setNumOfCartItems(0);
      if (allItems?.data) {
        setTotalCartPrice(allItems.data.totalCartPrice);
        setProducts(allItems.data.products);
        setCartID(allItems.data._id);
      }
    }
  }, [allItems, isLoading]);

  return [products, numOfCartItems, totalCartPrice, cartID];
};
export default GetAllCartItemsHook;