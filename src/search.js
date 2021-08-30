import React from 'react';



function  Search ({changeruserInput }){

  
    return (
        <section className="Search">
  <input 
   placeholder="What Are You Looking For ..."
   className="searchbox"
    onChange={changeruserInput}/>
    
        </section>
   )
  
}
export default Search ;