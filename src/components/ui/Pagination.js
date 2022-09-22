import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import { setOffset } from "../../features/filter/FilterSlice";

export default function Pagination() {
  const {perPage, pageCount} = useSelector((state) => state.filter)

  const dispatch = useDispatch();

  const handlePageSlected = e => {
    dispatch(setOffset(e.selected * perPage));
}
 
  return (
    <section className="pt-4">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <ReactPaginate
                className="job-pagination"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageSlected}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />  
      </div>
    </section>
  );
}
