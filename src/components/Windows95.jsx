import React from "react";
import Button95 from "./Button95";

function Windows95 ( {title, subtitle} ) {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(subtitle)
        .then(() => {
            console.log('Copied to clipboard:', subtitle);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
    };

    return(

        <div className="windows-95 w-fit h-fit space-y-2">
            <h1 className="windows-95-title flex"> {title} </h1>
            <section className="space-y-2 flex flex-col items-center">
                <h2> {subtitle} </h2>
                <Button95 text={'COPY!'} onClick={copyToClipboard}></Button95>
            </section>
        </div>

    )
}

export default Windows95