import React from "react";
import { Card } from "antd";
import mock from "../utils/mock.json";
const { Meta } = Card;

interface HotelCardProps {
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
    <div>
      {mock.map((item) => {
        return (
          <div key={item.id}>
            <div>
              {image}
              {alt}
            </div>
            <div>{name}</div>
            <div>{seats}</div>
            <div>{price}</div>
          </div>

          //   <Card style={{ width: 300 }} cover={<img alt={alt} src={image} />}>
          //     <Meta title={name} description={seats} />
          //
          //   </Card>
        );
      })}
    </div>
  );
};

export default Hotels;
