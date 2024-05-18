import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json"
let res ; let USD; let EUR; let GPB; let timebox; 
let CBTQuestions ; let cbt1; let cbtstatus; let CBTQuestions2=[]; 
let data1;

export const fetchTodo = createAsyncThunk("fetchTodo", async()=>{
    const data = await fetch("https://node-cbtserver.onrender.com/user/displayQuestions")
    return data.json()
})

const counterSlice = createSlice({
    name: 'counter',
    initialState:{ isloading:false, data:[], error:false,
                    count:1, firstname:"sammy", status:false, studentArray:[{name:"olutayo", age:30}, {name:"laolu", age:20}], 
                    end:endpoint, cbts:cbtstatus, arrayC:[],
                },
        extraReducers:(builder)=>{
            builder.addCase(fetchTodo.pending, (state,action)=>{
                state.isloading=true
            });
            builder.addCase(fetchTodo.fulfilled, (state, action)=>{
                state.isloading=false;
                state.data = action.payload
            });
            builder.addCase(fetchTodo.rejected, (state, action)=>{
                state.error=true
            })
         },
    
    reducers:{
        increament: (state)=>{
            state.count +=1
        },
        increamentByNumber:(state, action)=>{
            state.count = state.count + action.payload
        },
        add:(state, action)=>{
            state.arrayC.push(action.payload)
        },
        del:(state,action)=>{
            state.arrayC= state.arrayC.filter((user)=>user !== action.payload)
        },
        updatename:(state,action)=>{
            state.arrayC.map((user)=>{
                // if (user === action.payload.oldname){
                //     user = action.payload.newname
                // }
                user = action.payload
            })
        }

    }
     
})
export const{increament, increamentByNumber, changeName, changeStatus, 
    extraReducers, fetchData, del, add, updatename } = counterSlice.actions
export default counterSlice.reducer