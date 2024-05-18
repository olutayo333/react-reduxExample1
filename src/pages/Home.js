import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, increament, increamentByNumber, changeStatus, extraReducers, fetchData, fetchTodo, add, del, updatename} from '../redux/counterSlice'

const Home = () => {  
let count = useSelector((state)=> state.counterSlice.count) // accessing the global variable
let name = useSelector((state)=> state.counterSlice.firstname)
let endpoint = useSelector((state)=>state.counterSlice.end)
let endpointRes = useSelector((state)=>state.counterSlice.feedback)
let datadata = useSelector((state)=>state.counterSlice.datadata)
let status = useSelector((state)=> state.counterSlice.isloading) 
const [edit, setEdit]=useState(""); const [Rname, setRname] = useState(""); const [deleteName, setdeleteName]= useState(""); const [newname, setnewname]=useState("")
//const [quesArray, setquesArray]= useState([]);
let dispatch = useDispatch() //ACCESSING GLOBAL FUNCTIONS

  let quesArray = useSelector((state)=>state.counterSlice.data.result)

  const showState= ()=>{
    dispatch(changeStatus(true)); 
  }
  
  const data = useSelector((state)=>state)
  useEffect(()=>{
    dispatch(fetchTodo())
  }, [])
  console.log(data); 
  let message = data.counterSlice.data.message; 
  
  let arrayC = useSelector((state)=>state.counterSlice.arrayC); console.log(arrayC);
    return (
    <div>
        <h1> Count = {count}</h1>; <h1> Name = {name}</h1>; <h1>enpoint:{endpoint}</h1> <hr />
        <h3>{message}</h3>
        <input type="text" onChange={(e)=>{setRname(e.target.value)}} placeholder='Enter Rname' />
        <input type="text" onChange={(e)=>{setdeleteName(e.target.value)}} placeholder='Enter Delete Name' />
        
        <div>
          {
            arrayC.map((each, index)=>(
            <p> {each} 
              {/* <input type="text" placeholder='Edit' onChange={(e)=>{setEdit(e.target.value);}} /> */}
              <p>
                <input type="text" onChange={(e)=>{setnewname(e.target.value)}} placeholder='Enter New Name' /> 
                <button onClick={()=>dispatch(updatename({oldname:each, new:newname}))}> Update </button>
              </p>
              <button onClick={()=>dispatch(del(each) )}> Delete </button>
            </p>
           
            ))
          }
        </div>
        
        <button onClick={()=>dispatch(increament())}> Increament </button>
        <button onClick={()=>dispatch(increamentByNumber(10))}> Increament By 10 </button>
        <button onClick={()=>dispatch(changeName({name:"Tayo"}, {id:1}))}> Change Name </button>
        <button onClick={(e)=>dispatch(fetchTodo())} > show Data</button>
        <button onClick={showState}> Show Redux Updated State </button>
        <button onClick={()=>dispatch(add(Rname))}> Add to ArrayC</button>
        {/* <button onClick={showRArray}> Show Array </button>
        <button onClick={showAPI}> show API response</button>
        <button onClick={cbt}> Show Question Array</button> */}
        
      <p>HOME</p>
      <div>
         {/* <button onClick={(e)=> dispatch(fetchTodo())} > fetch Api</button>
          {
            data.counterSlice.data.result.map((e, index)=>(
              <li> {e.question}</li>
            ))
          } */}
        {
          // data.counterSlice.isloading?
          // <h1> Loading.....</h1>:
          // <>
          // <h1>not loading</h1>
          //   {
          //     quesArray.map((each, index)=>
          //       each.question 
          //     )
          //   }
          // </>
        }
      </div>
    </div>
  )
}

export default Home
