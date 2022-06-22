import React, { useState } from 'react';
import { Entry } from './Entry';

function SectionTable(props) {

    const [stateObject, updateStateObject] = useState(
        {
            moreButtonNotYetClicked: true
        }
    );

    const entries = [];

    // Things are a bit more complicated jere than you might expect because
    // the sorted order of ENTRIES (entryDate desc) doesn't suit standard_title
    // entries which need to be sorted by entry_title asc
    //
    // Build a sortedEntries version to suit both

    let sortedEntries = [];

    props.entries.forEach((entry) => {
        if (entry.sectionId === props.section.sectionId) {
            sortedEntries.push(entry);
        }
    });

    // sortedEntries isn't in the right order for standard_title eection

    if (props.section.sectionType === "standard_title") {
        sortedEntries.sort((a, b) => (a.entryTitle > b.entryTitle) ? 1 : ((b.entryTitle > a.entryTitle) ? -1 : 0));
    }

    sortedEntries.forEach((entry, index) => {

        var entryDisplaya;
        var entryDisplayb;
        var entryLink;

        if (props.section.sectionType === "standard_title") {
            entryDisplaya = entry.entryTitle;
            entryLink = "https://storage.googleapis.com/entry-files-for-pclite-system/" + entry.associatedFilename;
        } else {
            entryDisplaya = props.section.sectionPrefix + " " + entry.entryDate;
            entryDisplayb = entry.entrySuffix;
            entryLink = "https://storage.googleapis.com/entry-files-for-pclite-system/" + entry.associatedFilename;
        }

        entries.push(
            <Entry
                key={index}
                entryIndex={index}
                entrySectionType={props.section.sectionType}
                entryDisplaya={entryDisplaya}
                entryDisplayb={entryDisplayb}
                entryLink={entryLink}
                entryTableMoreButtonNotYetClicked={stateObject.moreButtonNotYetClicked} />
        );

    });

    let width = '80%';

    if (props.section.sectionType !== "standard_title") {
        width = '60%';
    }

    const sectionStyle = {
        width: width,
        textAlign: "center",
        display: "inline-block"
    }

    const headerStyle = {
        marginTop: "4vh",
        fontWeight: "bold",
        fontSize: "larger",
        textAlign: "center"
    };

    const moreButtonStyle = {
        display: "inline-block",
        marginBottom: 0,
        padding: "1vh",
        background: "white",
        cursor: "pointer"
    };

    // display the entry lines and add a "more" button provided that it hasn't been clicked yet and
    // there are at least 5 entries

    return (
        <div style={sectionStyle}>
            <p style={headerStyle}>{props.section.sectionHeader}</p>
            {entries}
            {/*if the "More" button hasn't been clicked, add a "More" button ag th end of the list*/}
            {(stateObject.moreButtonNotYetClicked && (sortedEntries.length > 4)) &&
                <p style={moreButtonStyle}
                    role='button'
                    aria-label='Display all entries in this section'
                    tabIndex='0'
                    onClick={() => updateStateObject({ moreButtonNotYetClicked: false })}
                    onKeyDown={() => updateStateObject({ moreButtonNotYetClicked: false })}>More&nbsp;
                    <img src='assets/images/caret-bottom.svg' alt='caret-bottom symbol' />
                </p>
            }
        </div>
    );

}

export { SectionTable };