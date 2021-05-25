import { Component } from "react";
import styled from 'styled-components';


interface IFieldProps
{
    name : string
    type : string
    value : string
    handleChange : (event : any) => void
    required? : boolean
    className? : string
}

interface IFieldState
{
    
}

class Field extends Component<IFieldProps, IFieldState>
{
    constructor(props : IFieldProps)
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
                <Text>{this.props.name} {this.props.required && <Asterisk>*</Asterisk>}</Text>
                <Input type={this.props.type} onChange={this.props.handleChange} required={this.props.required} value={this.props.value} placeholder=" "></Input>
            </Label>
        );
    }
}

const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 20px;
`;

const Text = styled.span`
    margin: 10px;
`;

const Asterisk = styled.span`
    color: red;
`;


const Input = styled.input`
    width: 100%;
    
    padding: 5px;
    
    font-size: 18px;
    
    border: none;
    border-radius: 3px;
    
    &:invalid:not(:placeholder-shown)
    {
        border: 2px solid red;
    }
`;

export default Field;