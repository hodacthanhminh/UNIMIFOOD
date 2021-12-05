// libs
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Loading from '../../../../components/Loading';
import StoreMenuItem from '../../components/StoreMenuItem';

const StoreMenu = ({ menu }) => {
  const [hasItem, setHasItem] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (menu.length > 0) {
      setHasItem(true);
      setIsLoading(false);
    } else {
      setHasItem(false);
      setIsLoading(false);
    }
  }, [menu]);
  return (
    <div className="store-menu-wrapper">
      <div className="store-menu-wrapper-inner">
        <div className="store-menu-heading">Thực đơn</div>
        <Loading isLoading={isLoading} isError={!hasItem}>
          <div className="store-menu-list-wrapper">
            {menu.length > 0 &&
              menu.map((item) => (
                <StoreMenuItem key={item.id} menuItem={item} />
              ))}
          </div>
        </Loading>
      </div>
    </div>
  );
};

StoreMenu.defaultProps = {
  menu: [],
};

StoreMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

const mapStateToProps = (state) => ({
  menu: state.storeid.menu,
});

export default connect(mapStateToProps, null)(StoreMenu);
