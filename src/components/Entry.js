import React from 'react';

function Entry(props) {

    function handleClick(target) {
        window.open(target, '_blank');
    }

    const entryStyle = {
        display: "inline-block",
        width: "100%",
        padding: "1vh",
        border: "1px solid black",
        background: "Aquamarine",
        cursor: "pointer"
    }

    //if the "more button hasn't been clicked", give the fourth entry in a list a whitesmoke background
    if (props.entryTableMoreButtonNotYetClicked && props.entryIndex === 3) {
        entryStyle.background = "whitesmoke";
    }

    // if the "more button hasn't been clicked, blank out all entries after the whitesmoke fourth
    if (props.entryTableMoreButtonNotYetClicked && props.entryIndex > 3) {
        entryStyle.display = "none";
    }

    const entrySpanStyle = {
        textDecoration: "underline",
        textDecorationColor: "blue",
        textUnderlinePosition: "under"
    };

    return (
        <div>
            <p style={entryStyle}
                role='button'
                aria-label='Display the pdf file for this entry'
                tabIndex='0'
                // see https://reactjs.org/docs/faq-functions.html
                onClick={() => handleClick(props.entryLink)}
                onKeyDown={() => handleClick(props.entryLink)}>

                {/* For "standard-titles" - eg "About" and "Policies" you just get one line, but for "date-titles"
              like "Minutes", you get a second lines providing a sort of "comment\" - eg "AGM and Parish Meeting"
          */}

                <span style={entrySpanStyle}>
                    {props.entryDisplaya}
                </span>
                {(props.entryDisplaya !== "standard_title") &&
                    <span>
                        <br />
                        {props.entryDisplayb}
                    </span>
                }
            </p>
        </div>
    );
}

export { Entry };