import { useInView } from "framer-motion";
import { debounce } from "lodash";
import { useEffect, useRef } from "react";

type Props = {
  nextPage: {
    fetchMore: () => void;
    hasNextPage: boolean;
  };
};

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
    <div className={``} ref={ref}>
      {nextPage.hasNextPage ? (
        <div></div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <button
            className="text-xl font-semibold text-zinc-600 dark:text-zinc-200 hover:underline"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Click here to go back to the top!
          </button>
        </div>
      )}
    </div>
  );
};
export default FetchMore;
