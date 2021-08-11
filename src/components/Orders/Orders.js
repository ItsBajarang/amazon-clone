import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../state/StateProvider";
import Order from "../Order/Order";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log("placed orders", orders);
  return (
    <div className="orders">
      <h1>Your orders</h1>


      <div className="orders__order">
        {orders.map((order) => {
          return <Order order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
