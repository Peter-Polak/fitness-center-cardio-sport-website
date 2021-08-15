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

class Reservations extends Component<IReservationsProps, IReservationsState>
{
    constructor(props : IReservationsProps)
    {
        super(props);
        this.state = 
        {
            ...getTokenInfo()
        }

        this.submit = this.submit.bind(this);
        this.onTokenChange = this.onTokenChange.bind(this);
        this.rememberToken = this.rememberToken.bind(this);
    }

    submit()
    {
        console.log(getReservations(this.state.token));
    }

    onTokenChange(event : any)
    {
        let newValue = event.target.value;
        this.setState({ token : (newValue as string).toUpperCase().substring(0, tokenLength) })
    }

    rememberToken(event : any)
    {
        const { token } = this.state;
        
        const newValue = event.target.checked;
        this.setState({ rememberToken : newValue });
        
        if(newValue && token.length === tokenLength)
        {
            setTokenInfo(token);
        }
        else
        {
            deleteTokenInfo();
        }
    }

    render() : JSX.Element
    {
        const { token, rememberToken } = this.state;

        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Prehľad rezervacií</Heading>
                <Content>
                    <Field icon="fingerprint" name="Identifikačný kľúč" type="text" value={token} handleChange={this.onTokenChange} required={true}/>
                    <Checkbox name="Zapamätať si identifikačný kľúč" checked={rememberToken} handleChange={this.rememberToken}/>
                    <SubmitButton type={ButtonType.CONFIRM} onClick={this.submit} disabled={token.length < tokenLength}>Odoslať</SubmitButton>
                </Content>
            </div>
        );
    }
}

export default Reservations;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SubmitButton = styled(Button)`
    margin-top: 20px;
`;