import React from 'react';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollection }) => (
            <CollectionPreview key={id} {...otherCollection} />
          ))}
      </div>
    );
  }
}

ShopPage.propTypes = {};

export default ShopPage;
