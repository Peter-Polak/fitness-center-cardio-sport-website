import { Component } from "react";
// import styled from 'styled-components';

import Heading from '../components/Heading';
import Checkbox from "./Checkbox";

interface ICheckboxGroupProps
{
    name : string 
    options : Array<string>
    checkboxStates : Array<boolean>
    handleChange : (checkboxStates : Array<boolean>) => void
    className? : string
}

interface ICheckboxGroupState
{
    
}

class CheckboxGroup extends Component<ICheckboxGroupProps, ICheckboxGroupState>
{
    constructor(props : ICheckboxGroupProps)
    {
        super(props);
        this.state = 
        {
            
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(checkboxIndex : number)
    {
        let checkboxStates = this.props.checkboxStates.map(
            (value, index) => 
            {
                if(index === checkboxIndex) 
                {
                    if(this.props.checkboxStates[checkboxIndex] === true)
                    {
                        return false;
                    }
                    
                    return true;
                }
                return false;
            }
        );
        
        this.props.handleChange(checkboxStates);
    }

    render() : JSX.Element
    {
        const { name, options: values, checkboxStates } = this.props;
        
        const checkboxes = values.map((value, index) => <Checkbox name={value} checked={checkboxStates[index]} handleChange={() => this.handleChange(index)} key={name + index}/>)
        
        return (
            <div className={this.props.className}>
                <Heading heading="H2">{name}</Heading>
                {checkboxes}
            </div>
        );
    }
}

export default CheckboxGroup;