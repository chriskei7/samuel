import { useState } from "react";
import "./NewDepartment.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addDepartment } from "../../redux/apiCall";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(inputs);
  };

  const handleClick = (e) => {
    e.preventDefault();
          const department = { ...inputs};
          console.log(department);
          addDepartment(department, dispatch);
          alert('Department Created');
          window.location.replace('/')
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Department</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Department Name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Elder in Charge</label>
          <input
            name="elder"
            type="text"
            placeholder="Elder in Charge"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Head</label>
          <input
            name="head"
            type="string"
            placeholder="Head No"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Project</label>
          <input
            name="project"
            type="string"
            placeholder="project"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Upcoming Event</label>
          <input
            name="event"
            type="string"
            placeholder="Event"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}