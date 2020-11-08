import './directory.styles.scss';
import React from 'react';
import { SECTIONS_DATA } from '../../data/sections.data';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => (
  <div className="directory-menu">
    {
      SECTIONS_DATA.map(({
        id,
        ...otherProps
      }) => <MenuItem key={id} {...otherProps} />)
    }
  </div>
);

export default Directory;
