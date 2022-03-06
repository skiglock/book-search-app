import { Dispatch } from "redux";
import { bookAPI } from "../../api/book";
import { BookAction, BookActionTypes, IBookFilters } from "../../types/book";

export const fetchBooks = ({
  page,
  limit,
  category,
  sort,
  search,
}: IBookFilters) => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_BOOKS });
      const { data } = await bookAPI.getBooks({
        page,
        limit,
        category,
        sort,
        search,
      });
      setTimeout(() => {
        dispatch({
          type: BookActionTypes.FETCH_BOOKS_SUCCESS,
          payload: {
            books: data.items,
            totalItems: data.totalItems,
          },
        });
      }, 1200);
    } catch (e) {
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_ERROR,
        payload: `${e}`,
      });
    }
  };
};
