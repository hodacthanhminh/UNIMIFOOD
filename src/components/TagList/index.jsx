// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import classnames from 'classnames';
// dataSources
import { tagsValue } from '../../dataSources/TagStore';

const TagList = ({ classname, value }) => (
  <Tag
    className={classnames(classname, 'tag-list')}
    color={tagsValue[value].value}
  >
    {tagsValue[value].label}
  </Tag>
);

TagList.propTypes = {
  value: PropTypes.string,
  classname: PropTypes.string,
};

TagList.defaultProps = { value: 'default', classname: 'tagList' };

export default TagList;
