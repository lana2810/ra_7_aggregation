import React from "react";
import moment from "moment";
import { nanoid } from "nanoid";

function WithTransformDate(Component, value) {
  const field = value;
  return function (props) {
    if (field === "month") {
      const newDate = props.list.map((item) => {
        const date = moment(item.date).format("MMM");
        return { month: date, amount: item.amount, id: nanoid() };
      });
      return <Component list={newDate} />;
    }
    if (field === "year") {
      const newDate = props.list.map((item) => {
        const date = moment(item.date).format("YYYY");
        return { year: date, amount: item.amount, id: nanoid() };
      });
      return <Component list={newDate} />;
    }
    const sortedDate = props.list
      .map((item) => ({
        date: moment(item.date),
        amount: item.amount,
      }))
      .sort((a, b) => (a.date > b.date ? 1 : -1))
      .map((it) => ({
        date: it.date.format("YYYY MM DD"),
        amount: it.amount,
        id: nanoid(),
      }));
    return <Component list={sortedDate} />;
  };
}

export default WithTransformDate;
