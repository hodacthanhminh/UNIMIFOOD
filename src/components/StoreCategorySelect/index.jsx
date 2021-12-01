// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Select, Tag } from 'antd';
// dataSources
import { tags, tagsValue } from '../../dataSources/TagStore';

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

const StoreCategorySelect = ({ handleOnChange }) => (
  <Select
    allowClear
    mode="multiple"
    onChange={handleOnChange}
    tagRender={tagRender}
    className="category-select"
    placeholder="Tìm kiếm theo"
    showArrow
  >
    {tags.map((item) => (
      <Select.Option key={item} value={tagsValue[item].value}>
        {tagsValue[item].label}
      </Select.Option>
    ))}
  </Select>
);

StoreCategorySelect.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
};

export default StoreCategorySelect;
