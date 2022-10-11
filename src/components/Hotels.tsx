import React from "react";
import { Card } from "antd";
const { Meta } = Card;

interface HotelCardProps {
  id: number;
  image: string;
  alt: string;
  name: string;
  price: number;
  seats: number;
}

const Hotels: React.FC<HotelCardProps> = ({
  image,
  alt,
  name,
  price,
  seats,
}: HotelCardProps) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 320 }}
        cover={<img alt={alt} src={image} height="250px" />}
      >
        <Meta title={name} />
        <div>Количество мест: {seats}</div>
        <div>Стоимость: {price} руб.</div>
      </Card>
    </>
  );
};

export default Hotels;
