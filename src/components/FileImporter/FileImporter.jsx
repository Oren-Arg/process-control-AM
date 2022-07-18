import Papa from "papaparse";
import { useContext, useState } from "react";
import { dataContext } from "../../context/context";
const FileImporter = () => {
  const { setUserData } = useContext(dataContext);
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = Papa.parse(event.target.result);
        console.log(csvOutput.data[0]);
        setUserData(csvOutput.data);
      };

      fileReader.readAsText(file);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
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
