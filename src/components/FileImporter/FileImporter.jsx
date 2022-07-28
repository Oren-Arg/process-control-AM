import Papa from "papaparse";
import { useState } from "react";
const { transpose } = require("matrix-transpose");

const FileImporter = (props) => {
  const [file, setFile] = useState();
  const fileReader = new FileReader();

  const setData = props.data;

  const logParser = (file) => {
    let fileRows = file
      .split(/\r?\n/)
      .map((row) => row.split(" INFO Script: "));
    // fileRows.forEach((row) => {
    //   row[0] = row[0].split(" ");
    // });
    console.log(fileRows);
  };

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

    if (file.type == "text/csv") {
      fileReader.onload = function (event) {
        const csvOutput = Papa.parse(event.target.result, {
          header: false, //set to 'true' if you want the data to be saved as an array of objects with the first array as the keys.
          complete: () => {
            console.log("CSV file successfully parsed");
          },
        });
        organizeData(csvOutput.data);
      };

      fileReader.readAsText(file);
    } else if (file.type == "application/dflog") {
      fileReader.onload = function (event) {
        logParser(event.target.result);
      };

      fileReader.readAsText(file);
    } else {
      console.log("File not supported");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Log Viewer</h1>
      <form>
        <label htmlFor="csvFileInput">Choose CSV File</label>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />
        <label htmlFor="logFileInput">Choose Log File</label>
        <input
          type={"file"}
          id={"logFileInput"}
          accept={".log"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          Plot Data
        </button>
      </form>
    </div>
  );
};

export default FileImporter;
