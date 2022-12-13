import "./App.css";
import React from "react";
import MonthTable from "./Component/MonthTable";
import YearTable from "./Component/YearTable";
import SortTable from "./Component/SortTable";
import WithTransformDate from "./Component/WithTransformData";

export default class App extends React.Component {
  state = {
    list: [],
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    fetch(process.env.REACT_APP_CURRENCY_URL)
      .then((res) => res.json())
      .then((json) => {
        const list = json.list;
        this.setState({ list });
      });
  };
  render() {
    const FormatedDateForMonth = WithTransformDate(MonthTable, "month");
    const FormatedDateForYear = WithTransformDate(YearTable, "year");
    const FormatedDateForSort = WithTransformDate(SortTable);
    const { list } = this.state;
    return (
      <div id="app">
        <FormatedDateForMonth list={list} />
        <FormatedDateForYear list={list} />
        <FormatedDateForSort list={list} />
      </div>
    );
  }
}
