import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRatings_OfProduct } from "../../Reducer/Api Requests/RatingApiRequests";
import { useParams } from "react-router";

const RateItemsHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const res = useSelector(state => state.ratingReducer.allRatings);

  useEffect(() => {
    dispatch(getAllRatings_OfProduct({ id }));
  }, []);

  const getPage = (page) => { dispatch(getAllRatings_OfProduct({ id, page })); };

  let allRatings = res;
  let pageCount = res.paginationResult ? res.paginationResult.numberOfPages : 1;
  let rateQty = allRatings.results;
  let rateAvg = allRatings.results !== 0 && (allRatings.data
    && (allRatings.data.map((data, i) => data.rating).reduce((acc, curr) => acc + curr, 0) / allRatings.results));

  return [allRatings, pageCount, getPage, rateAvg, rateQty,];
};
export default RateItemsHook;
