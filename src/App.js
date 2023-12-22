import { useState,useTransition } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [myList,setMyList]=useState([])
  const [isPending,startTransition]=useTransition()
 
  const handleChange=(e)=>{
    setInput(e.target.value);
    startTransition(()=>{
      const myArray=[]
    for (let i = 0; i <2000; i++) {
     myArray.push(e.target.value)
       }
       setMyList(myArray)
    })
  }
  return (
    <div className="App">
      <input 
      type='text'
      onChange={handleChange}
      />
      {isPending ? 
      "Yüklenir":
      myList.map((item,index)=>{
         return <div key={index}>{item}</div>
        })
      }
    </div>
  );
}

export default App;
