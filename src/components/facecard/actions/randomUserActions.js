import React from "react";

export const getRandomUser = () => {
  return fetch("https://api.randomuser.me/")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
