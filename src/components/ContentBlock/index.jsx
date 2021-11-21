import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentBlock = ({ content }) => (
  <div className="content-block-wrapper">
    <div className="container">
      <div className={classNames('content-block__main ', content.position)}>
        <div className="content-block__content">
          <h1 className="heading content-block__heading">{content.heading}</h1>
          <p className="content-block__paragraph">{content.paragraph}</p>
          <Link to={content.link} className="btn btn-secondary">
            {content.button}
          </Link>
        </div>
        <div className="content-block__image">
          <img src={content.img} alt="None" />
        </div>
      </div>
    </div>
  </div>
);

ContentBlock.propTypes = {
  content: PropTypes.shape({
    position: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContentBlock;
