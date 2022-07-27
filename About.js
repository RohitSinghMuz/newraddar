import React from "react";
import "./About.css";
const Aboutus = () => {
  return (
    <div>
      <div className="Aboutmain">
        <div className="aboutush">
          <h5>ABOUT AN API OF ICE AND FIRE </h5>
          <p>
            An API of Ice And Fire is the world's greatest source for quantified
            and structured data from the universe of Ice and Fire (and the HBO
            series Game of Thrones). We give you access to data about all the
            Books, Characters and Houses in an easy to use JSON format.
          </p>
          <h5>Who are you?</h5>
          <p>
            I'm Joakim Skoog and I build cool stuff over at Nelly.com. If you
            have questions or thoughts about this API don't hesitate to send me
            a tweet or an email.
          </p>
          <h5>Why did you build this?</h5>
          <p>
            I decided to build this API because I like to build stuff that other
            developers can use. A Song of Ice And Fire and Game of Thrones is
            also a great universe and I find it really interesting. Besides,
            this was (and is) a great opportunity to try out new technologies.
          </p>
          <h5>Recognitions</h5>
          <p>
            This API utilizes a couple of frameworks and libraries but these are
            the most important ones.
          </p>

          <li>
            {" "}
            ASP.NET Core - The API is built on top of this awesome framework by
            Microsoft.
          </li>
          <li>
            {" "}
            Azure - The API has been hosted on Azure from the very first day and
            it's been a smooth ride ever since.{" "}
          </li>
          <li>
            Dapper - This micro ORM has been invaluable since we switched from
            Entity Framework.
          </li>
          <h5>Copyright</h5>
          <p>
            The A Song of Ice And Fire series and its data is the property of
            George R.R. Martin. The data is used without claim of ownership. All
            data has been collected from open free sources such as A Wiki of Ice
            and Fire and has then been normalized and cleaned. This project uses
            a BSD license.
          </p>
        </div>
        <div class="myfooter">
          <div class="leftf">
            <h5>© 2022 - Joakim Skoog</h5>
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
    </div>
  );
};

export default Aboutus;
