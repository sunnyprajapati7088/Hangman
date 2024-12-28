import { configureStore } from '@reduxjs/toolkit'

import HangmanSlice from './HangmanSlice';
const Store = configureStore({
    reducer: {
        hangman:HangmanSlice,
    }
})
export default Store;