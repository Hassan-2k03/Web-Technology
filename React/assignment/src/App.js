import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      orderItems: [
        {
          id: 1,
          name: 'MAC book',
          description: 'Apple MGN63HNA\nMacBook ro Air (13-inch, 8GB RAM, 256GB SSD, Apple M1 chip with 8‑core CPU and 7‑core GPU, Two Thunderbolt / USB 4 ports, 2020) - Space Grey',
          price: 90000,
          quantity: 0,
        },
        {
          id: 2,
          name: 'Dell core i7',
          description: 'Dell Inspiron 5406 14" FHD Touch Display 2in1 Laptop (11th Gen i7-1165G7 / 8GB / 512GB SSD / Integrated Graphics / Win 10 + MS Office / Backlit KB / Silver) D560374WIN9S',
          price: 80000,
          quantity: 0,
        },
        {
          id: 3,
          name: 'HP',
          description: 'HP 14 Thin & Light 14" (35.56cms) FHD Laptop (11th Gen Intel Core i3-1115G4, 8GB DDR4, 256GB SSD, Windows 10 Home, MS Office, 1.47 Kg, Natural Silver)',
          price: 65000, quantity: 0,
        },
      ],
    };
  }
  handleQuantityChange = (id, increment) => {
    const updatedOrderItems = this.state.orderItems.map((item) => {
      if (item.id === id) {
        item.quantity += increment;
      }
      return item;
    });
    this.setState({
      orderItems: updatedOrderItems,
    });
  };
  calculateTotalCost = () => {
    let total = 0;
    this.state.orderItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };
  getExpectedDeliveryDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 3);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };
  render() {
    const styles = {
      item: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
      },
    };
    return (
      <div>
        <div id="order-summary" style={styles}>
          <h1>Order Summary</h1>
          <div className="order-items">
            {this.state.orderItems.map((item) => (
              <div key={item.id} style={styles.item} className="order-item">
                <div>
                  <strong>{item.name}</strong>
                </div>
                <div>
                  Description: <br />
                  <div className="description">{item.description}</div>
                </div>
                <div>Price: {item.price} INR</div>
                <div>
                  Quantity: {item.quantity}<br />
                  <button
                    className="increment-button"
                    onClick={() => this.handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-cost">
            <strong>Total: {this.calculateTotalCost()} INR</strong>
          </div>
        </div>
        <div>
          Order Date: {this.getCurrentDate()}
        </div>
        <div>
          Expected Delivery Date: {this.getExpectedDeliveryDate()}
        </div>
      </div>);
  }
}
export default App