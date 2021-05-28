import { Component } from "react";
import styled from "styled-components";

export enum ButtonType
{
    TRANSPARENT, NORMAL, CONFIRM, CANCEL
}

interface IButtonProps
{
    onClick : (event : any) => void
    type? : ButtonType
    disabled? : boolean
    className? : string
}

interface IButtonState
{
    
}

class Button extends Component<IButtonProps, IButtonState>
{
    constructor(props : IButtonProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }
    
    getButtonComponent(type : ButtonType | undefined)
    {
        switch(type)
        {
            case ButtonType.NORMAL:
                return TextButton;
            case ButtonType.CONFIRM:
                return ConfirmButton;
            case ButtonType.CANCEL:
                return CancelButton;
            default:
            case ButtonType.TRANSPARENT:
                return TransparentButton;
        }
    }

    render() : JSX.Element
    {
        const { type, onClick, disabled, className, children } = this.props;
        const StyledButton = this.getButtonComponent(type);
        
        return (
            <StyledButton onClick={onClick} disabled={disabled} className={className}>
                {children}
            </StyledButton>
        );
    }
}

const TransparentButton = styled.button`
    padding: 0;
    margin: 0;

    color: ${props => props.theme.color.primary.normal};
    background-color: transparent;
    
    &:disabled
    {
        opacity: 25%;
        cursor: not-allowed;
    }
`;

const TextButton = styled(TransparentButton)`
    padding: 10px 40px;
    
    color: ${props => props.theme.color.background};
    font-family: "Bebas Neue";
    font-size: 24px;
    letter-spacing: 1px;
    background-color: ${props => props.theme.color.primary.normal};
`;

const ConfirmButton = styled(TextButton)`
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.succes.normal};
`;

const CancelButton = styled(TextButton)`
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.warning.normal};
`;

export default Button;