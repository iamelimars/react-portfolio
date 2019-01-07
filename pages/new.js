import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import {SectionsContainer, Section, Header, Footer} from '../index';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';



class Example extends Component {
    render() {
        let options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true
        };

        return (
            <div>
                <ScrollToTopOnMount />
                <SectionsContainer {...options}>
                    <Section color="#69D2E7">Page 1</Section>
                    <Section>Page 2</Section>
                    <Section>Page 3</Section>
                </SectionsContainer>
            </div>
        );
    }
}

export default Example