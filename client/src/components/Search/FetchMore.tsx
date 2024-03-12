type Props = {
  fetchMore: () => void;
};

const FetchMore = ({ fetchMore }: Props) => {
  return (
    <button onClick={fetchMore} className="h-2">
      FetchMore
    </button>
  );
};
export default FetchMore;
