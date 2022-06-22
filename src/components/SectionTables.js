import React from 'react';
import { SectionTable} from './SectionTable'

function SectionTables(props) {

    const sections = [];

    props.sections.forEach((section) => {
        sections.push(

            <SectionTable
                section = {section}
                entries={props.entries}
                key={section.sectionId} />

        );
    });

    return (
        <div style={{ textAlign: "center" }}>
            {sections}
        </div>
    );
}

export {SectionTables};