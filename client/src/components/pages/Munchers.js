import React from "react";
import Boris from "../../assets/boris eats.PNG";


export default function Munchers() {
  return (
    <div>
      <h1>Munchers Page</h1>
      <p>
        Here is a list of some very hungry people. Join the ranks to eat and
        compete around the world
      </p>
      <div className="Boris">
        <h1>Boris</h1>
        <div className="Boris">
          <img src={Boris} alt="Boris eats" style={{ width: "300px" }} />
        </div>
      </div>
    </div>
  );
}

      // <section className="munchers-section">
      //     <div className="munchers">
      //         <article className="muncher">
      //             <h3 className="muncher-centered">Oscar</h3>
                  
      //             <a href="" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      //     <div className="munchers">
      //      <article className="muncher">
      //             <h3 className="muncher-centered">Boris</h3>
              
      //             <a href="" target="_blank" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      //     <div className="munchers">
      //         <article className="muncher">
      //             <h3 className="muncher-centered">Carter</h3>
                  
      //             <a href="" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      //     <div className="munchers">
      //         <article className="muncher">
      //             <h3 className="muncher-centered">Sarah</h3>
                  
      //             <a href="" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      // </section>

