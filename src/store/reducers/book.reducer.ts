import {
  BookAction,
  BookState,
  EBookSort,
  EBookCategory,
  BookActionTypes,
} from "../../types/book";

const initalState: BookState = {
  books: [],
  totalItems: 0,
  loading: false,
  error: null,
  filters: {
    page: 1,
    limit: 12,
    category: EBookCategory.DEFAULT,
    sort: EBookSort.DEFAULT,
    search: "",
  },
};

export const bookReducer = (state = initalState, action: BookAction) => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS:
      return { ...state, loading: true };
    case BookActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: [...state.books, ...action.payload.books],
        totalItems: action.payload.totalItems,
      };
    case BookActionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};
