import React from "react";
import { Button, Modal, Table, Typography, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { buyItems, removeItem } from "../Redux/actions";

const Card = ({ visibility, onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.card.items);
  let totalPrice = 0;

  const onClickBuy = () => {
    dispatch(buyItems());
    notification["success"]({
      message: "Ваш заказ принят!",
      description: "Спасибо за покупку"
    });
  };
  const onItemDeleted = id => {
    dispatch(removeItem(id));
  };

  items &&
    items.forEach(item => {
      totalPrice = totalPrice + item.price;
    });

  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Price",
      dataIndex: "price"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a onClick={() => onItemDeleted(record.id)}>
          <DeleteOutlined />
        </a>
      )
    }
  ];

  return (
    <Modal title={"Card"} footer={null} visible={visibility} onCancel={onClose}>
      <Table columns={columns} dataSource={items} pagination={false} />
      <Typography level={4}>Total price: {totalPrice}$</Typography>
      <Button onClick={onClickBuy}>Buy</Button>
    </Modal>
  );
};

export default Card;
