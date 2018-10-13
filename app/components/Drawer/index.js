/**
*
* Drawer
*
*/

import React from 'react';


import styles from './styles.css';
import classNames from 'classnames';

function Drawer({items, selectItem, itemLableAttr, itemKeyAttr, isDrawerOpen}) {
  const itemNodes = items.map(item => (
    <div className={styles.item}
      key={item[itemKeyAttr]}
      onClick = {() => selectItem(item)}>
      {item[itemLableAttr]}
    </div>
  ));

  return (
    <div className={classNames(styles.drawer, {[styles.drawerOpen]: isDrawerOpen})}>
    {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLableAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
}

export default Drawer;
