import { instance } from ".";
import {
  EBookCategory,
  EBookSort,
  IBookFilters,
  IBooksResponse,
} from "../types/book";

export const bookAPI = {
  getBooks(
    page = 1,
    limit = 30,
    {
      category = EBookCategory.DEFAULT,
      sort = EBookSort.DEFAULT,
      search = "",
    }: IBookFilters
  ) {
    return instance.get<IBooksResponse>(
      `volumes?q=${search}+subject:${category}`,
      {
        params: {
          startIndex: page,
          maxResults: limit,
          orderBy: sort,
        },
      }
    );
  },
};
