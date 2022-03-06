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
  page: number;
  limit: number;
  category: EBookCategory;
  sort: EBookSort;
  search: string;
}

export interface BookState {
  books: IBook[];
  totalItems: number;
  loading: boolean;
  error: null;
  filters: IBookFilters;
}

export enum BookActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
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

export type BookAction =
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction;
