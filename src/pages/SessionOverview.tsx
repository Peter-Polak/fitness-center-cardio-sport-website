import { Component } from "react";
import styled from "styled-components";

import { settings } from "../utilities/settings";

import Heading from "../components/Heading";
import MaterialIcon from "../components/MaterialIcon";

class SessionOverview extends Component
{
    render() : JSX.Element
    {
        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="event" color="dark"/> Termíny</Heading>
                <SessionsIframe src={settings.sessionOverviewTableUrl}/>
            </div>
        );
    }
}

const SessionsIframe = styled.iframe`
    width: 100%;
    height: 600px;
`;

export default SessionOverview;