import { Component } from "react";

interface IKeyboardInputProps
{
    handleKeyDown : (event : any) => void
}

class KeyboardInput extends Component<IKeyboardInputProps>
{
    componentDidMount()
    {
        document.addEventListener("keydown", this.props.handleKeyDown);
    }
    
    componentWillUnmount()
    {
        document.removeEventListener("keydown", this.props.handleKeyDown);
    }

    render() : JSX.Element
    {
        return (
            <></>
        );
    }
}

export default KeyboardInput;