import React from 'react';
import responsive from '../../assets/responsive.png';
import { useTranslation } from 'react-i18next';



const SectionPresentation = () => {

  const { t } = useTranslation(); 

  return (
    <section id="slider">
    <div className="conteneur flex-slider">
      <figure id="milieu-haut-gauche">
        <a href="/">
          <img
            src={responsive}
            alt={t('CV.sliderResponsiveAlt')}
            title={t('CV.sliderResponsiveTitle')}
          />
        </a>
        <figcaption>
          <a href="/">{t('CV.sliderFigcaption')}</a>
        </figcaption>
      </figure>
      <div id="milieu-haut-droit">
        <h2>
          {t('CV.sliderTitle')}
        </h2>
        <p>
          {t('CV.sliderText1')}
        </p>
        <p>{t('CV.sliderText2')}</p>
      </div>
    </div>
  </section>
  );
};

export default SectionPresentation;
