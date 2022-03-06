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
  page: 1,
  limit: 12,
  filters: {
    category: EBookCategory.DEFAULT,
    sort: EBookSort.DEFAULT,
    search: "",
  },
};

export const bookReducer = (
  state = initalState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS:
      return { ...state, loading: true };
    case BookActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload.books
          ? [...state.books, ...action.payload.books]
          : [],
        totalItems: action.payload.totalItems,
      };
    case BookActionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BookActionTypes.LOAD_MORE_BOOKS:
      return {
        ...state,
        page:
          state.totalItems / state.page <= state.limit
            ? state.page
            : state.page + 1,
      };
    case BookActionTypes.SET_BOOKS_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filter]: action.payload.value,
        },
        page: 1,
        books: [],
      };
    default:
      return state;
  }
};
