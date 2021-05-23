import { Component } from "react";
import styled from 'styled-components';


interface ICheckboxProps
{
    name : string
    checked : boolean
    handleChange : (event : any) => void
    className? : string
}

interface ICheckboxState
{
    
}

class Checkbox extends Component<ICheckboxProps, ICheckboxState>
{
    constructor(props : ICheckboxProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <Label className={this.props.className}>
                <Input type="checkbox" onChange={this.props.handleChange} checked={this.props.checked}></Input>
                <Text>{this.props.name}</Text>
            </Label>
        );
    }
}


const Label = styled.label`
    display: flex;
    align-items: center;
`;

const Text = styled.span`

`;

const Input = styled.input`
    width: 25px;
    height: 25px;
    margin: 10px;
`;

export default Checkbox;