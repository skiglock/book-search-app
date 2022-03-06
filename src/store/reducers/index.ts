import { combineReducers } from "redux";
import { bookReducer } from "./book.reducer";

export const rootReducer = combineReducers({
  book: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
