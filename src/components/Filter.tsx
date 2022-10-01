import React from "react";
import { Select } from "antd";
const { Option } = Select;

const Filter: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Select
        defaultValue="Количество мест"
        style={{ width: 160 }}
        onChange={handleChange}
      >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
      </Select>

      <Select
        defaultValue="Стоимость"
        style={{ width: 160 }}
        onChange={handleChange}
      >
        <Option value="1000">1000</Option>
        <Option value="2000">2000</Option>
        <Option value="3000">3000</Option>
        <Option value="4000">4000</Option>
      </Select>
    </div>
  );
};

export default Filter;
