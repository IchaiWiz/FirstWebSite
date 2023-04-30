import React from "react";
import profil from "../../../src/assets/profil.png";
import design from "../../../src/assets/design.png";
import integration from "../../../src/assets/integration.png";
import dev from "../../../src/assets/dev.png";
import seo from "../../../src/assets/seo.png";

const CardPointFort = (props) => {

  return (
    <>
      <figure>
        <h4>{props.title}</h4>
        <img src={props.img} title="Catégorie : graphisme" alt="Design" />
        <figcaption>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </figcaption>
      </figure>
    </>
  );
};

const Main = (HandleName) => {
  return (
    <main>
      <div className="conteneur flex-main">
        <section id="presentation">
          <h2>Présentation</h2>
          <div className="profil-flex">
            <img src={profil} title="Photo de Prénom Nom" alt="Prénom Nom" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit? Quam
              totam corporis doloremque doloribus fugit, voluptatibus nobis
              repellat libero incidunt temporibus provident earum dolorem.
              Numquam, libero et ratione deleniti ipsa veritatis.
            </p>
          </div>
          <div className="mise-en-avant">

          <CardPointFort title ="design" img = {design} alt = "Design" figcaption={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}/>
          <CardPointFort title ="Front-end development" img = {integration} alt = "Design" figcaption={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}/>
          <CardPointFort title ="Back-end development" img = {dev} alt = "Design" figcaption={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}/>
          <CardPointFort title ="SEO" img = {seo} alt = "seo" figcaption={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}/>
          
          </div>
        </section>
        <aside>
          <div className="encart">
            <h3>Qui suis-je ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              suscipit, ipsa esse illo sunt iure voluptatum, labore laboriosam
              quas officiis non totam repellat natus odit corporis dicta tenetur
              consectetur sapiente.
            </p>
          </div>
          <div className="encart">
            <h3>Experience</h3>
            <ul>
              <li>Experience 1</li>
              <li>Experience 2</li>
              <li>Experience 3</li>
            </ul>
          </div>
          <div className="encart">
            <h3>Contact</h3>
            <form action="traitement.js" method="post">
              <label htmlFor="prenom">Prenom</label>
              <input
                placeholder="Prénom"
                type="text"
                id="prenom"
                name="prenom"
              />

              <label htmlFor="nom">Nom</label>
              <input placeholder="Nom" type="text" id="nom" name="nom" />

              <label htmlFor="email">E-mail</label>
              <input
                placeholder="E-mail"
                type="email"
                id="email"
                name="email"
              />

              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Ecrire votre message"
                name="message"
                id="message"
              ></textarea>

              <input type="submit" />
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Main;
