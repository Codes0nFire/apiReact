
import './App.css'
import axios from "axios"

function App() {


 async function  getData(){
    

    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then((res)=>console.log(res.data))
    // .catch((err)=>console.log(err));  

    // or  



  try {
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(data);
  }

  catch(err){
    console.log(err);
  }



  }
  

  return (
    <>
   <button onClick={getData} >getData</button>
    </>
  )
}

export default App
