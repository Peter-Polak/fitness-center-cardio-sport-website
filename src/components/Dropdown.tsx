import { Component } from "react";
import styled from "styled-components";
import MaterialIcon from "./MaterialIcon";

interface IDropdownProps
{
    title : string
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
        const { title, children } = this.props;
        const { isExpanded } = this.state;
        
        return (
            <Container>
                <Title onClick={this.toggle}>
                    <span>{title}</span>
                    <span>{isExpanded ? <MaterialIcon icon="expand_less"/> : <MaterialIcon icon="expand_more"/>}</span>
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

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 10px;
    
    font-family: "Bebas Neue";
    font-size: 24px;
    color: ${props => props.theme.color.primary.normal};
    
    /* background-color: #1b1b1b; */
    
    cursor: pointer;
`;

const Content = styled.div<{ isExpanded : boolean }>`
    display: ${(props) => props.isExpanded ? "block" : "none"};
`;

export default Dropdown;