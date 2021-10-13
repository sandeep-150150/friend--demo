import React, { useState } from 'react';
import './App.css';

function App() {
  const [text,setText]=useState("");
  const [data,setData]=useState([]);
  const [star,setStar]=useState(true);
 
  const handleChange = (e) =>{
    setText(e.target.value);
  };
  
  const handleAdd=()=>{
    if(!text){
      alert("Enter your Name");
    }else{ 
      setData([...data,text]);
      setText("");
    }  
  }

  const handleStar=()=>{
    if(star){
      setStar(false);

    }else{
      setStar(true);
    }
  }

  const handleDelete =(id)=>{
    const remainItem = data.filter((elem,index)=>{
       return index!==id;
    })
    setData(remainItem);

  }

  return (
    <>
      <div>
          <div>
             <h1>Friends List</h1>
             <input type="search" value={text} onChange={handleChange} placeholder="Enter Your Friends Name"/>
             <button type="button" onClick={handleAdd}>ADD</button>
          </div>
          <div>

          {
             data.map((cvalue,index)=>{
              return (
                <>
                  <div key={index} style={{display:"flex",justifyContent:"space-between",width:"300px",border:"2px solid black",alignItems:"center",margin:"10px 0"}}>
                    <div>
                        <h3 >{cvalue}</h3>
                    </div>
                    <div >
                        <button onClick={handleStar}>{star ? (<i class="far fa-2x fa-star"></i>):(<i class="fas fa-2x fa-star"></i>) }</button>
                        <button onClick={()=>handleDelete(index)}><i class="fas fa-2x fa-trash-alt" title="DELETE"></i></button>
                    </div>
                 </div>

                </>

              )

             })

          }


              
          </div>
      </div> 
    </>
  );
}

export default App;
