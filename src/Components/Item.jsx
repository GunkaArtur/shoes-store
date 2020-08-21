import React, { useState } from "react";
import { addItem } from "../Redux/actions";
import { useDispatch } from "react-redux";
import { Card, Button, Modal, Typography } from "antd";

const Item = item => {
  const { name, description, img, price } = item;
  const [modal, setModal] = useState(false);
  const { Meta } = Card;
  const dispatch = useDispatch();

  const onAddToCard = () => {
    dispatch(addItem(item));
  };

  return (
    <div style={{ width: 250 }}>
      <Card hoverable cover={<img alt={name} src={img} />}>
        <Meta
          title={name}
          description={description}
          style={{ marginBottom: 20 }}
        />
        <Typography>Price: {price}$</Typography>
        <Button onClick={() => setModal(true)}>View</Button>
        <Button onClick={onAddToCard}>Add to card</Button>
        <Modal
          title={name}
          visible={modal}
          footer={null}
          onCancel={() => setModal(false)}
        >
          <img src={img} alt={name} />
          <Typography>{name}</Typography>
          <Typography>{description}</Typography>
          <Typography> Price: {price}$</Typography>
          <Button onClick={onAddToCard}>Add to card</Button>
        </Modal>
      </Card>
    </div>
  );
};

export default Item;
