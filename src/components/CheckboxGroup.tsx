import { Component } from "react";
import styled from 'styled-components';

import Heading from '../components/Heading';
import Checkbox from "./Checkbox";

interface ICheckboxGroupProps
{
    name : string 
    values : Array<string>
}

interface ICheckboxGroupState
{
    checkboxStates : Array<boolean>
}

class CheckboxGroup extends Component<ICheckboxGroupProps, ICheckboxGroupState>
{
    constructor(props : ICheckboxGroupProps)
    {
        super(props);
        this.state = 
        {
            checkboxStates : props.values.map(value => false)
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(checkboxIndex : number)
    {
        this.setState(
            {
                checkboxStates : this.props.values.map(
                (value, index) => 
                {
                    if(index === checkboxIndex) return true;
                    return false;
                })
            }
        );
    }

    render() : JSX.Element
    {
        const { checkboxStates } = this.state;
        const { name, values } = this.props;
        
        const checkboxes = values.map((value, index) => <Checkbox name={value} checked={checkboxStates[index]} handleChange={() => this.handleChange(index)} key={name + index}/>)
        
        return (
            <div>
                <Heading heading="H2">{name}</Heading>
                {checkboxes}
            </div>
        );
    }
}

export default CheckboxGroup;