import { createSlice } from '@reduxjs/toolkit';

export interface ListItem {
    id: number;
    name: string;
    img: string;
    price: string;
    count: number;
}

const initialState: ListItem[] = [];

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem(state, action) {
            if(state.length !== 0) {
                for(let i = 0; i < state.length; i++){
                    if (action.payload.id === state[i].id){
                        state[i].count = action.payload.count;
                    }else{
                        state.push(action.payload);
                    }
                }
            }else {
                state.push(action.payload);
            }
        },
        setCounter(state, action) {
            for(let i = 0; i < state.length; i++){
                if (action.payload.id === state[i].id){
                    state[i].count = action.payload.count;
                }
            }
        },
        removeItem(state, action) {
            console.log(action.payload);
            return state.filter(item => item.id !== action.payload);
        },
        removeAllItem() {
            return [];
        }
    },
})

export const { addItem, setCounter, removeItem, removeAllItem } = itemSlice.actions;

export default itemSlice.reducer;