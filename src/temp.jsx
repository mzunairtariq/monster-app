import React, { useEffect } from "react";
import App from "./App.js";

export function Temp() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((jsonData) => {
        return jsonData.json();
      })
      .then((data) => {
        this.setState({ monsters: data });
      });
  });
}
