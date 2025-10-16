import { use, useState } from "react";

export const States = () => {
    const [value, setValue] = useState(0);
    const handleIncrement = () => {
        setValue(value +1);
        console.log(value +1);
    }
    return(
    <>
    <section>
        <h1>{value}</h1><br /><br />
        <button onClick={handleIncrement}>Increment ++</button>
    </section>
    </>
    );
}