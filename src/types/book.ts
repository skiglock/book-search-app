export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

export interface IBooksResponse {
  items: IBook[];
  totalItems: number;
}

export enum EBookCategory {
  DEFAULT = "",
  ART = "art",
  BIOGRAPHY = "biography",
  COMPUTERS = "computers",
  HISTORY = "history",
  MEDICAL = "medical",
  POETRY = "poetry",
}

export enum EBookSort {
  DEFAULT = "",
  NEWEST = "newest",
  RELEVANCE = "relevance",
}

export interface IBookFilters {
  category: EBookCategory;
  sort: EBookSort;
  search: string;
}

export interface BookState {
  books: IBook[];
  totalItems: number;
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  filters: IBookFilters;
}

export enum BookActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
  LOAD_MORE_BOOKS = "LOAD_MORE_BOOKS",
  SET_BOOKS_FILTER = "SET_BOOKS_FILTER",
}

interface FetchBooksAction {
  type: BookActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
  type: BookActionTypes.FETCH_BOOKS_SUCCESS;
  payload: {
    books: IBook[];
    totalItems: number;
  };
}

interface FetchBooksErrorAction {
  type: BookActionTypes.FETCH_BOOKS_ERROR;
  payload: string | null;
}

interface LoadMoreBooksAction {
  type: BookActionTypes.LOAD_MORE_BOOKS;
}

interface setBooksFilterAction {
  type: BookActionTypes.SET_BOOKS_FILTER;
  payload: {
    filter: keyof IBookFilters;
    value: string | number | EBookCategory | EBookSort;
  };
}

export type BookAction =
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction
  | LoadMoreBooksAction
  | setBooksFilterAction;
