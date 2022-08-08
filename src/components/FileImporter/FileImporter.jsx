import Papa from "papaparse";
import { useState, useContext } from "react";
import { dataContext } from "../../context/dataContext";
const fileReader = new FileReader();
const { transpose } = require("matrix-transpose");
let logRows;
const FileImporter = () => {
  const [csvFile, setCsvFile] = useState();
  const [logFile, setLogFile] = useState();

  function logParser(file) {
    console.log(file);
    fileReader.onload = async function (event) {
      const res = event.target.result;
      logRows = res.split(/\r?\n/);
      let timeArray = logRows.map((row) => row.split(" ", 2));

      console.log(logRows[0], timeArray[0]);
    };

    fileReader.readAsText(file);
  }

  const setData = useContext(dataContext);
  function csvParser(file) {
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
    fileReader.onload = async function (event) {
      const csvOutput = Papa.parse(event.target.result, {
        header: false, //set to 'true' if you want the data to be saved as an array of objects with the first array as the keys.
        complete: () => {
          console.log("CSV file successfully parsed");
        },
      });
      organizeData(csvOutput.data);
    };

    fileReader.readAsText(file);
  }

  const handleOnChangeCSV = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleOnChangeLOG = (e) => {
    setLogFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    logParser(logFile);
    csvParser(csvFile);
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
          onChange={handleOnChangeCSV}
        />
        <label htmlFor="logFileInput">Choose Log File</label>
        <input
          type={"file"}
          id={"logFileInput"}
          accept={".log"}
          onChange={handleOnChangeLOG}
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
