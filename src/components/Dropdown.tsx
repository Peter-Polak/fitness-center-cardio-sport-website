import { Component } from "react";
import styled, { css } from "styled-components";
import { BobUpAndDownAnimation } from "../styles/animations";
import MaterialIcon from "./MaterialIcon";

export enum DropdownType
{
    PRIMARY, SECONDARY
}

interface IDropdownProps
{
    title : string
    type : DropdownType
}

interface IDropdownState
{
    isExpanded : boolean
}

class Dropdown extends Component<IDropdownProps, IDropdownState>
{
    constructor(props : IDropdownProps)
    {
        super(props);
        this.state = 
        {
            isExpanded : false
        }
        
        this.toggle = this.toggle.bind(this);
    }

    toggle()
    {
        this.setState({ isExpanded : !this.state.isExpanded });
    }
    
    render() : JSX.Element
    {
        const { title, type, children } = this.props;
        const { isExpanded } = this.state;
        
        return (
            <Container>
                <Title onClick={this.toggle} type={type}>
                    <span>{title}</span>
                    <ExpandIcon type={type}>{isExpanded ? <MaterialIcon icon="expand_less"/> : <MaterialIcon icon="expand_more"/>}</ExpandIcon>
                </Title>
                <Content isExpanded={isExpanded}>
                    {children}
                </Content>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div<{ type : DropdownType }>`
    display: flex;
    align-items: center;
    ${
        props =>
        {
            if(props.type === DropdownType.PRIMARY)
            {
                return css`
                    
                    flex-direction: column;
                `;
            } 
            else if(props.type === DropdownType.SECONDARY)
            {
                return css`
                
                `;
            }
        }
    }
    
    padding: 10px;
    
    font-family: "Bebas Neue";
    font-size: 24px;
    color: ${props => props.theme.color.primary.normal};
    
    /* background-color: #1b1b1b; */
    
    cursor: pointer;

    &:hover
    {
        background-color: #1f1f1f;
    }
`;

const ExpandIcon = styled.span<{ type : DropdownType }>`
    position: relative;
    
    ${
        props =>
        {
            if(props.type === DropdownType.PRIMARY)
            {
                return css`
                    
                    animation: ${BobUpAndDownAnimation} 1s ease-in-out infinite alternate;
                `;
            } 
        }
    }
`;

const Content = styled.div<{ isExpanded : boolean }>`
    display: ${(props) => props.isExpanded ? "block" : "none"};
    
    padding: 5px 20px;
`;

export default Dropdown;