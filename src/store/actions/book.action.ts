import { Dispatch } from "redux";
import { bookAPI } from "../../api/book";
import {
  BookAction,
  BookActionTypes,
  EBookCategory,
  EBookSort,
  IBookFilters,
} from "../../types/book";

export const fetchBooks = (
  page: number,
  limit: number,
  { category, sort, search }: IBookFilters
) => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_BOOKS });
      const { data } = await bookAPI.getBooks(page, limit, {
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

export function loadMoreBooks() {
  return {
    type: BookActionTypes.LOAD_MORE_BOOKS,
  };
}

export function setBooksFilter(
  filter: keyof IBookFilters,
  value: string | number | EBookCategory | EBookSort
) {
  return {
    type: BookActionTypes.SET_BOOKS_FILTER,
    payload: {
      filter,
      value,
    },
  };
}
