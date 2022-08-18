import { configureStore } from "@redux/toolkit";
import reducers from "./reducers"

const store = configureStore({ reducer: reducers })

export default store