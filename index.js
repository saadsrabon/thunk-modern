// Task Practice the module In mOdule 5 ,
//Complete the assignment
//Start Watching MOdule - 6 6 videos -with Practice
const {createAsyncThunk, createSlice, configureStore }= require("@reduxjs/toolkit");
const initialState =[]

const fetchPost = createAsyncThunk("post/fetchPost", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
});

const postReducer = createSlice({
    name: "post",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

const store = configureStore({
    reducer: {
        post: postReducer.reducer
    }
});


const render = () => {
    console.log(store.getState());
}
store.subscribe(render);

store.dispatch(fetchPost());