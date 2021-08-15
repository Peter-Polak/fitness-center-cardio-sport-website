import { Component } from "react";
import styled from "styled-components";
import Button, { ButtonType } from "../components/Button";
import Field from "../components/Field";
import Heading from "../components/Heading";
import MaterialIcon from "../components/MaterialIcon";
import { getReservations } from "../utilities/restApi";

interface IReservationsProps
{
    
}

interface IReservationsState
{
    token : string
}

class Reservations extends Component<IReservationsProps, IReservationsState>
{
    constructor(props : IReservationsProps)
    {
        super(props);
        this.state = 
        {
            token : ""
        }

        this.submit = this.submit.bind(this);
        this.onTokenChange = this.onTokenChange.bind(this);
    }

    submit()
    {
        console.log(getReservations(this.state.token));
    }

    onTokenChange(event : any)
    {
        let newValue = event.target.value;
        this.setState({ token : (newValue as string).toUpperCase().substring(0, 6) })
    }

    render() : JSX.Element
    {
        const { token } = this.state;

        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Prehľad rezervacií</Heading>
                <Content>
                    <TokenField icon="fingerprint" name="Identifikačný kľúč" type="text" value={token} handleChange={this.onTokenChange} required={true}/>
                    <Button type={ButtonType.CONFIRM} onClick={this.submit} disabled={token.length < 6}>Odoslať</Button>
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

const TokenField = styled(Field)`
    margin-bottom: 20px;
`;