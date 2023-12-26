import { configureStore } from "@reduxjs/toolkit";
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/iceCream/IcecreamSlice";
// const reduxLogger = require("redux-logger");
import userReducer from "../features/user/userSlice";
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
