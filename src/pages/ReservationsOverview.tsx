import { Component } from "react";
import styled from "styled-components";
import Button, { ButtonType } from "../components/Button";
import Checkbox from "../components/Checkbox";
import Field from "../components/Field";
import Heading from "../components/Heading";
import MaterialIcon from "../components/MaterialIcon";
import { deleteTokenInfo, getTokenInfo, setTokenInfo } from "../utilities/helpers";
import { getReservations } from "../utilities/restApi";
import { tokenLength } from "../utilities/settings";

interface IReservationsProps
{
    
}

interface IReservationsState
{
    token : string
    rememberToken : boolean
}

class ReservationsOverview extends Component<IReservationsProps, IReservationsState>
{
    constructor(props : IReservationsProps)
    {
        super(props);
        this.state = 
        {
            ...getTokenInfo()
        }

        this.handleTokenSubmit = this.handleTokenSubmit.bind(this);
        this.handleTokenChange = this.handleTokenChange.bind(this);
        this.handleRememberTokenChange = this.handleRememberTokenChange.bind(this);
    }

    handleTokenChange(event : any)
    {
        let newToken = event.target.value;
        let newTokenFormatted = (newToken as string).toUpperCase().substring(0, tokenLength); // Convert token string to upper case and limit it to set length.

        this.setState({ token :  newTokenFormatted});
    }

    handleRememberTokenChange(event : any)
    {
        const { token } = this.state;
        
        const newRememberToken = event.target.checked;
        this.setState({ rememberToken : newRememberToken });
        
        if(newRememberToken && token.length === tokenLength)
        {
            setTokenInfo(token);
        }
        else
        {
            deleteTokenInfo();
        }
    }

    handleTokenSubmit()
    {
        console.log(getReservations(this.state.token));
    }

    render() : JSX.Element
    {
        const { token, rememberToken } = this.state;

        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Prehľad rezervacií</Heading>
                <Content>
                    <Field icon="fingerprint" name="Identifikačný kľúč" type="text" value={token} handleChange={this.handleTokenChange} required={true}/>
                    <Checkbox name="Zapamätať si identifikačný kľúč" checked={rememberToken} handleChange={this.handleRememberTokenChange}/>
                    <SubmitButton type={ButtonType.CONFIRM} onClick={this.handleTokenSubmit} disabled={token.length < tokenLength}>Odoslať</SubmitButton>
                </Content>
            </div>
        );
    }
}

export default ReservationsOverview;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SubmitButton = styled(Button)`
    margin-top: 20px;
`;