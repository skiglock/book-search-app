import { Dispatch } from "redux";
import { bookAPI } from "../../api/book";
import {
  BookAction,
  BookActionTypes,
  EBookCategory,
  EBookSort,
  IBookFilters,
} from "../../types/book";

export const fetchBooks = (filters: IBookFilters) => {
  const {
    page = 1,
    limit = 30,
    category = EBookCategory.DEFAULT,
    sort = EBookSort.DEFAULT,
    search = "",
  } = filters;
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
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_SUCCESS,
        payload: {
          books: data.items,
          totalItems: data.totalItems,
        },
      });
    } catch (e) {
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_ERROR,
        payload: `${e}`,
      });
    }
  };
};
