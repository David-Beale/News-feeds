import { useDispatch, useSelector } from "react-redux";
import { setOptions } from "../../../../redux/addFeed";
import { getOptions } from "./searchFunctions";

export const useSearchNodes = () => {
  const dispatch = useDispatch();
  const status = useSelector(({ addFeed }) => addFeed.status);
  const targetDomain = useSelector(({ addFeed }) => addFeed.domain);

  const onClick = (e) => {
    e.preventDefault();
    const targetNode = e.target;
    const options = getOptions(targetNode, status, targetDomain);
    dispatch(setOptions(options));
  };

  return onClick;
};
