import { Component } from 'react';
import styled from 'styled-components';
import MaterialIcon from './MaterialIcon';

interface ILanguageButtonProps
{

}

interface ILanguageButtonState
{
    
}

class LanguageButton extends Component<ILanguageButtonProps, ILanguageButtonState>
{
    constructor(props : ILanguageButtonProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {   
        return (
            <Dropdown>
                <span><MaterialIcon icon="language"/></span>
                <DropdownContent>
                    <p>SK</p>
                    <p>EN</p>
                </DropdownContent>
            </Dropdown>
        );
    }
}

const Dropdown = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    display: inline-block;
`;

const DropdownContent = styled.div`
    position: absolute;

    display: block;
    z-index: 1;

    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: #f9f9f9;
`;

export default LanguageButton;