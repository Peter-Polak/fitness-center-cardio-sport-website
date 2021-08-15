import { Component } from "react";
import styled from 'styled-components';
import MaterialIcon from "./MaterialIcon";


interface IFieldProps
{
    name : string
    type : string
    value : string
    onChange : (event : any) => void
    icon? : string
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
        const { name, type, value, onChange: handleChange, icon, required, className } = this.props;
        
        return (
            <Label className={className}>
                <Text>{icon && <MaterialIcon icon={icon}/>}{name} {required && <Asterisk>*</Asterisk>}</Text>
                <Input type={type} onChange={handleChange} required={required} value={value} placeholder=" "></Input>
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