import React from "react";
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <div>
        <Navbar />
            <div style={{position: "relative", width: "100%", height: 0, paddingTop: "141.4286%",
                paddingBottom: "48px", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden",
                borderRadius: "8px", willChange: "transform"}}>
                <iframe style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0}}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEP3MCmgfk&#x2F;view?embed">
                </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEP3MCmgfk&#x2F;view?utm_content=DAEP3MCmgfk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Margaret Elson's Resume</a>
    </div>
  )
};

export default Resume;