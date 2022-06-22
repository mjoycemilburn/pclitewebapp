import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap'
import { ControlledCarousel } from './ControlledCarousel'
import { SectionTables } from './SectionTables'
import { Trailer } from './Trailer'
import { SECTIONS, ENTRIES, SetLocalCollectionCopies } from '../services/working_data_setup';

function DisplayWrapper() {

    const [stateObject, setStateObject] = useState({ copiesInitialized: false });

    // The problem here is how to call the async SetLocalCollectionCopies function. We can't do
    // this directly in DisplayWrapper with "await SetLocalCollectionCopies" as you would need to
    // declare DisplayWrapper as async to permit the use of the await keyword, But you can't have
    // async components in React. Tried to get round this by using the same technique as is 
    // employed in PcliteManager's loginButton and making SetLocalCollectionCopies return a promise,
    // with a success function that we could pick up with a .then. But because this required removal
    // of the async keyword for the SetLocalCollectionCopies declaration it required the await's
    // in the SECTIONS and ENTRIES retrieval code to be turned into nest .thens and it ws clear
    // that this was not a good way to go. The solution below is courtesy of
    // https://stackoverflow.com/questions/57847626/using-async-await-inside-a-react-functional-component
    // According to BlogRocket at https://blog.logrocket.com/guide-to-react-useeffect-hook/, the
    // addition of the empty array as a second argument means that the effect is only executed once
    // after the first render and skipped for the following render cycles. For details see
    // https://stackoverflow.com/questions/55240526/useeffect-second-argument-variations-in-react-hook
    
    useEffect(() => {
        if (!stateObject.copiesInitialized) {
            getLocalCollections();
        }
    });

    // useEffect in this instance is used as a convenient way of launching an asynch function. If
    // I've got this right, the component will rattle through the first time while getLocalCollections
    // does it stuff in the background. The first time through, the SECTIONS and ENTRIES arrays will
    // be empty, but when getLocalCollections finishes, it resets the stateObject and thus triggers
    // a re-render. Putting a breakpoint on the return() seems to confirm this action - it re-renders
    // precisely twice, the first time just showing the carousel but then repainting this and adding
    // the ENTRIES display. By splitting the component, you could probably save the carousel refres
    // but this hardly seems worth it

    // According to BlogRocket at https://blog.logrocket.com/guide-to-react-useeffect-hook/, the addition
    // of an empty array to the useEffect as a second argument ensures that the effect is only executed
    // once after the first render and skipped for the following render cycles. But the use of the 
    // copiesInitialized state property, seems to me to make the process more understandable. For details see
    // https://stackoverflow.com/questions/55240526/useeffect-second-argument-variations-in-react-hook

    const getLocalCollections = async () => {
        await SetLocalCollectionCopies();
        setStateObject({ copiesInitialized: true })
    }

    return (
        <div>
            <Container fluid="px-0">
                <Row>
                    <Col className="p-0" lg={2} xs={0} style={{ backgroundColor: "linen" }} />
                    <Col className="p-0" lg={8} xs={12}>
                        <ControlledCarousel />
                        <SectionTables sections={SECTIONS} entries={ENTRIES} />
                        <Trailer />
                    </Col>
                    <Col className="p-0" lg={2} xs={0} style={{ backgroundColor: "linen" }} />
                </Row>
            </Container>
        </div>
    )

}

export { DisplayWrapper };