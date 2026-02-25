import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      {/* ONE BIG BOX */}
      <div className="container experience_container">
        <div className="experience__main">
          <h3>Experience In:</h3>

          {/* TWO COLUMNS INSIDE THE BOX */}
          <div className="experience__twoCols">
            {/* LEFT: FRONTEND */}

            <div>
              <div className="experience__content">
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>JavaScript</h4>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>React</h4>
                  </div>
                </article>
              </div>
              <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Supabase</h4>
                  </div>
                </article>
            
            </div>

            <div>
              <div className="experience__content">
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Java</h4>
                  </div>
                </article>

                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>C code</h4>
                  </div>
                </article>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>API Integration</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/* end two cols */}
        </div>
      </div>
    </section>
  );
};

export default Experience;