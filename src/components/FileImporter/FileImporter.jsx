import Papa from "papaparse";
import { useState } from "react";
const { transpose } = require("matrix-transpose");

const FileImporter = (props) => {
  const [file, setFile] = useState();
  const fileReader = new FileReader();

  const setData = props.data;
  const organizeData = (data) => {
    const headers = data.splice(0, 1);
    const tarnsposedArr = transpose(data);
    const dataObject = {};
    headers[0].forEach((header, ind) => {
      dataObject[header] = tarnsposedArr[ind];
    });
    const reduceData = (dataObj) => {
      const len = dataObj.length;

      let reduced = [];

      for (let i = 0; i < len; i += 100) {
        reduced.push(dataObj[i]);
      }
      return reduced;
    };

    const datasetObject = {
      labels: reduceData(dataObject.Time),
      datasets: [{ label: "Pump1", data: reduceData(dataObject.Pump1) }],
    };
    setData(datasetObject);
  };
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = Papa.parse(event.target.result, {
          header: false, //set to 'true' if you want the data to be saved as an array of objects with the first array as the keys.
          complete: () => {
            console.log("File successfully parsed");
          },
        });
        organizeData(csvOutput.data);
      };

      fileReader.readAsText(file);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Log Viewer</h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>
    </div>
  );
};

export default FileImporter;
