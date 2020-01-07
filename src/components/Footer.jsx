import React from "react";

// Footer
function Footer(){

    const date = new Date();

    {/* Copyright with current year */}

    return(

        <footer>
            <p>Copyright © Michael Chen {date.getFullYear()} </p>
        </footer>

    );

}

export default Footer;