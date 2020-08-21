import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const Items = ({ items }) => {
  return items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      desctiption={item.description}
      price={item.price}
      img={item.img}
    />
  ));
};

const mapStateToProps = state => {
  return {
    items: state.items.items[0]
  };
};

export default connect(mapStateToProps, null)(Items);
