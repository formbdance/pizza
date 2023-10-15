import { createSlice, configureStore } from "@reduxjs/toolkit";


const imageState = createSlice({
    name: 'setImg',
    initialState: {
        value: false,
        img: null,
    },
    reducers: {
        loadimg: (state, action) => {
            const loaditems = action.payload;
            state.value = true;
            state.img = loaditems;
        },
        deloadimg: state => {
            state.value = false;
            state.img = null;
        }
    }
})

const menuState = createSlice({
    name: 'menuStatus',
    initialState: {
        value: [],
    },
    reducers: {
        loadItems: (state, action) => {
            const selected = action.payload;
            state.value = selected;
        } 
    }
})

export const store = configureStore({
    reducer: {
        setImg: imageState.reducer,
        menuStatus: menuState.reducer,
    }
});

export const { loadimg, deloadimg } = imageState.actions;
export const { loadItems } = menuState.actions;

