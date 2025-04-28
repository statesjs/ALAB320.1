import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//LEFT SIDE
function Header() {
  return (
    <div className="Header">
      <h2>Employee Directory</h2>
    </div>
  );
}

function SearchBar() {
  return <input type="search" className="SearchBar left"></input>;
}

function EmployeeListItem() {
  return (
    <div className="EmployeeListItem left">
      <div>
        <img className="image left" src="/manager.png" />
      </div>
      <div>
        <h3>Name</h3>
        <h4>Role</h4>
      </div>
    </div>
  );
}
function EmployeeList() {
  return (
    <div className="EmployeeList left">
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
    </div>
  );
}

//RIGHT SIDE

function HeaderRight() {
  return (
    <div className="HeaderRight">
      <div className="left-icon">
        <img src="/left-arrow.png" alt="Back" />
      </div>
      <div className="center-text">
        <h2>Employee</h2>
      </div>
      <div className="right-spacer"></div>
    </div>
  );
}

function Card() {
  return (
    <div className="Card right">
      <div className="main right">
        <div>
          <img className="image left" src="/manager.png" />
        </div>
        <div>
          <h2>Julie Taylor</h2>
          <h4>VP of Marketing</h4>
        </div>
      </div>
      <div className="detail">
        <div className="detailColumn">
          <h3>Call Office</h3>
          <h4>781-000-0002</h4>
        </div>
        <img src="/right-arrow.png" />
      </div>
      <div className="detail">
        <div className="detailColumn">
          <h3>Call Mobile</h3>
          <h4>617-000-0002</h4>
        </div>

        <img src="/right-arrow.png" />
      </div>
      <div className="detail">
        <div className="detailColumn">
          <h3>SMS</h3>
          <h4>617-000-0002</h4>
        </div>

        <img src="/right-arrow.png" />
      </div>
      <div className="detail">
        <div className="detailColumn">
          <h3>Email</h3>
          <h4>example@email.com</h4>
        </div>

        <img src="/right-arrow.png" />
      </div>
    </div>
  );
}

//THE WHOLE SHEBANG 💣
function App() {
  return (
    <>
      <div className="HomePage">
        <Header />
        <SearchBar />
        <EmployeeList />
      </div>
      <div className="EmployeePage">
        <HeaderRight />
        <Card />
      </div>
    </>
  );
}

export default App;
