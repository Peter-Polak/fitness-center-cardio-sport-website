import { Component } from 'react'
import styled from 'styled-components';

interface Props
{
    
}

interface State
{
    
}

class WarningText extends Component<Props, State>
{
    state = {}

    render()
    {
        return (
            <Warning>
                {this.props.children}
            </Warning>
        )
    }
}

const Warning = styled.span`
    color: ${props => props.theme.color.warning.normal};
    text-transform: uppercase;
`;

export default WarningText
