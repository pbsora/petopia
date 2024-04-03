type Props = {
  nextPage: {
    fetchMore: () => void;
    hasNextPage: boolean;
  };
};

import { useInView } from "framer-motion";
import { debounce } from "lodash";
import { useEffect, useRef } from "react";

const FetchMore = ({ nextPage }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const fetchNextPage = debounce(() => {
      nextPage.fetchMore();
    }, 400);

    if (isInView) fetchNextPage();

    return () => {
      fetchNextPage.cancel();
    };
  }, [isInView, nextPage]);

  return (
    <div className={`h-2`} ref={ref}>
      {nextPage.hasNextPage ? <div>Loading...</div> : <div>No more data</div>}
    </div>
  );
};
export default FetchMore;
