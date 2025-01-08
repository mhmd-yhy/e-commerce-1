import { toast } from 'react-toastify';


const UseNontification = (msg, type) => {
  type === "success" ? toast.success(msg) : type === "error" ? toast.error(msg) : type === "warn" ? toast.warn(msg) : toast.info(msg);
};
export default UseNontification;