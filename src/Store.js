import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import  autorization  from './pages/AutorizaitionPage/Store';
import { myApi } from './myApi/myApi';



export const store = configureStore({
    reducer: {
      autorization: autorization,
      
     [myApi.reducerPath]: myApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myApi.middleware),
    
  });

setupListeners(store.dispatch)