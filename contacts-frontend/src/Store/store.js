import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { ContactsList } from './Reducers/ContactsList';
import { AuthReducer } from './Reducers/AuthReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  }
  

  const rootReducer = combineReducers({
    contacts: ContactsList,
        accessToken: AuthReducer 
  })
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
