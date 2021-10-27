import {configureStore} from '@reduxjs/toolkit';
import reducers from "./features/redux/reducers";



const store = configureStore({
    reducer: reducers,
    // middleware: getDefaultMiddleware => getDefaultMiddleware({  }),
});
export default store