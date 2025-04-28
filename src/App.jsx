import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//LEFT SIDE
function Header() {
  return (
    <div className="Header left">
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
        <h2>Name</h2>
        <h3>Role</h3>
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

function Card() {
  return (
    <div className="Card right">
      <div className="Header right">
        <h2>Employee</h2>
      </div>
      <div className="main right">
        <div>
          <img className="image left" src="/manager.png" />
        </div>
        <div>
          <h2>Julie Taylor</h2>
          <h3>VP of Marketing</h3>
        </div>
      </div>
      <div>
        <h2>Call Office</h2>
        <h3>781-000-0002</h3>
      </div>
      <div>
        <h2>Call Mobile</h2>
        <h3>617-000-0002</h3>
      </div>
      <div>
        <h2>SMS</h2>
        <h3>617-000-0002</h3>
      </div>
      <div>
        <h2>Email</h2>
        <h3>example@email.com</h3>
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
        <Card />
      </div>
    </>
  );
}

export default App;
