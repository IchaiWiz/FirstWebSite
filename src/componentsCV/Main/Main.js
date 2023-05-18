import React from "react";
import profil from "../../../src/assets/profil.png";
import design from "../../../src/assets/design.png";
import integration from "../../../src/assets/integration.png";
import dev from "../../../src/assets/dev.png";
import seo from "../../../src/assets/seo.png";
import { useTranslation } from 'react-i18next';

const CardPointFort = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <figure>
        <h4>{t(props.title)}</h4>
        <img src={props.img} title={t(props.title)} alt={t(props.title)} />
        <figcaption>
          {t(props.figcaption)}
        </figcaption>
      </figure>
    </>
  );
};

const Main = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="conteneur flex-main">
        <section id="presentation">
          <h2>{t('CV.presentationTitle')}</h2>
          <div className="profil-flex">
            <img src={profil} title={t('CV.presentationTitle')} alt={t('CV.presentationTitle')} />
            <p>
              {t('CV.presentationText')}
            </p>
          </div>
          <div className="mise-en-avant">
            <CardPointFort title="CV.cardDesignTitle" img={design} figcaption="CV.cardDesignFigcaption" />
            <CardPointFort title="CV.cardFrontEndTitle" img={integration} figcaption="CV.cardFrontEndFigcaption" />
            <CardPointFort title="CV.cardBackEndTitle" img={dev} figcaption="CV.cardBackEndFigcaption" />
            <CardPointFort title="CV.cardSEOTitle" img={seo} figcaption="CV.cardSEOFigcaption" />
          </div>
        </section>
        <aside>
          <div className="encart">
            <h3>{t('CV.whoAmITitle')}</h3>
            <p>
              {t('CV.whoAmIText')}
            </p>
          </div>
          <div className="encart">
            <h3>{t('CV.experienceTitle')}</h3>
            <ul>
              <li>{t('CV.experience1')}</li>
              <li>{t('CV.experience2')}</li>
              <li>{t('CV.experience3')}</li>
            </ul>
          </div>
          <div className="encart">
            <h3>{t('CV.contactTitle')}</h3>
            <form action="traitement.js" method="post">
              <label htmlFor="prenom">{t('CV.labelPrenom')}</label>
              <input
                placeholder={t('CV.labelPrenom')}
                type="text"
                id="prenom"
                name="prenom"
              />

              <label htmlFor="nom">{t('CV.labelNom')}</label>
              <input placeholder={t('CV.labelNom')} type="text" id="nom" name="nom" />

              <label htmlFor="email">{t('CV.labelEmail')}</label>
              <input
                placeholder={t('CV.labelEmail')}
                type="email"
                id="email"
                name="email"
              />

              <label htmlFor="message">{t('CV.labelMessage')}</label>
              <textarea
                placeholder={t('CV.messagePlaceholder')}
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
