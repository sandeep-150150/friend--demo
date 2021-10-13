import React from 'react';

const Friend = () => {
  return (
    <>
        <div style={{display:"flex",justifyContent:"space-between",width:"300px",border:"2px solid black",alignItems:"center",margin:"10px 0"}}>
            <div>
                 <h3 >Rahul</h3>
            </div>
            <div >
                <button><i class="far fa-2x fa-star"></i></button>
                <button><i class="fas fa-2x fa-trash-alt"></i></button>
            </div>

        </div>
      
    </>
  );
}

export default Friend;
