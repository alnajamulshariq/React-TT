export const EventsProps = () => {
    const HandleWelcomeUser = (name) => {
        alert(`Welcome ${name}`);
    }

    const handleHover = () => {
        alert(`Thanks for hovering`);
    }
    return(
    <>
    <WelcomeUser onClick={() => HandleWelcomeUser("Shariq")} onMouseEnter={handleHover}/>
    </>
    );
}

const WelcomeUser = (props) => {
    const handleGreetings = () => {
        console.log("Hey User Welcome");
        props.onClick();
    }
        
    return(
    <>
    <button onClick={props.onClick}>CLick Me</button>
    <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
    <button onClick={handleGreetings}>Greetings</button>
    </>
    );
}