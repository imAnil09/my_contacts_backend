import {configureStore} from '@reduxjs/toolkit';
import { ContactsList } from './Reducers/ContactsList';
import { AuthReducer } from './Reducers/AuthReducer';

const store = configureStore({
    reducer: {
        contacts: ContactsList,
        accessToken: AuthReducer   
    }
})

export default store;