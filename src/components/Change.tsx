import { Component } from "react";
import styled from "styled-components";

interface IChangeProps
{
    oldString : string
    newString : string
}

interface IChangeState
{
    
}

class Change extends Component<IChangeProps, IChangeState>
{
    constructor(props : IChangeProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {      
        const {oldString, newString} = this.props;

        return (
            <>
            <del>{oldString}</del> → {newString}
            </>
        );
    }
}

export default Change;