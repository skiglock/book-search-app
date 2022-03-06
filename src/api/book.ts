import { instance } from ".";
import { IBookFilters, IBooksResponse } from "../types/book";

export const bookAPI = {
  getBooks({ page, limit, category, sort, search }: IBookFilters) {
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
