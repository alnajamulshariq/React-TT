import React from 'react'

function EventHandling() {
    const handleClick = () => {
        alert("Button Clicked")
    }
    const handleClick2 = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Button Clicked 2")
    }
    const handleUserWelcome = (user) => {
      alert(`Welcome ${user}`)
    }
    
  return (
    <>
    <button onClick={handleClick}>Click Me</button><br /><br />
    <button onClick={handleClick2}>Click Me</button><br /><br />
    <button onClick={()=> alert("Inline Arrow Functon")}>Inline Arrow Function</button><br /><br />

    {/* argument pass nahi ho raha neeche handleUserWelcome mein */}
    {/* <button onClick={handleUserWelcome("Shariq")}>Click Me</button> */}

    {/* ap is tarah argument pass kar sakte hain fat arrow function k throuh */}

    <button onClick={()=>handleUserWelcome("Shariq")}>Click Me</button><br /><br />
    <button onClick={()=>handleUserWelcome("Najam")}>Click Me</button>
    </>
  )
}

export default EventHandling