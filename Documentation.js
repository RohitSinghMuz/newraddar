import React from "react";
import "./Document.css";

const Documentation = () => {
  return (
    <>
      <div>
        <div className="document">
          <h1>DOCUMENTATION</h1>
          <hr></hr>
          <div classsName="doc1">
          <div className="leftdoc">
            <h5>Introduction</h5>
              <p>This documentation will help you familiarise yourself
              with the API and how to consume the different resources that are
              available. The documentation provides all information needed to
              get started and it also has educational examples for all
              resources.</p>
               If you're interested in using a native implementation,
              please take a look at the Libraries section.
              <h5> Current Version</h5>
               The current version of the API is 1.
               </div>
               <div className="rightdoc">
               <h1>Overview</h1>
                </div>
          </div>
        </div>

        <div class="myfooter">
          <div class="leftf">
            <h3>© 2022 - Joakim Skoog</h3>
          </div>
          <div class="rightf">
            <ul>
              <li>
                <a href="https://twitter.com/j_skoog" class="fa fa-github"></a>
              </li>
              <li>
                <a href="https://twitter.com/j_skoog" class="fa fa-twitter"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;
