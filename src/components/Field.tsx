import { Component } from "react";
import styled from 'styled-components';


interface IFieldProps
{
    name : string
    type : string
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
                <Input type={this.props.type} onChange={this.props.handleChange} required={this.props.required}></Input>
            </Label>
        );
    }
}

const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    margin-right: 50px;
    
    width: 100%;
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
`;

export default Field;