import './collection-item.styles.scss';

import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
