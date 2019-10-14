import React from "react";
import { PropTypes } from 'prop-types';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox'
import './Product.scss';

export class Product  extends React.Component  {
  render() {
    const { id, title, content } = this.props;
      
    return (
        <article className="product-summary">
          <SmallTitle>{title}</SmallTitle>
          <HtmlBox>{content}</HtmlBox>
          <Button variant="primary">
            Add to cart
          </Button>
        </article>
      )
  }
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};