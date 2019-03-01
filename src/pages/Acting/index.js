import React, { Component } from "react";
//COMPONENTS
import Container from "../../components/Container";
import Iframe from 'react-iframe'

class Acting extends Component {
    state = {
    }

    render() {
        return (
            <Container>
                DOE
                {/* <p><a href="https://vimeo.com/228125963">Kyle Merryman - Demo Reel</a> from <a href="https://vimeo.com/kylemerryman">Kyle Merryman</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
                {/* <iframe src="https://player.vimeo.com/video/228125963" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
                <Iframe url="https://www.youtube.com/watch?v=hII2oU4pRwM" />
            </Container>
        )
    }

}

export default Acting;