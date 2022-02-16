import React from "react";
import ReactDOM from "react-dom";
import UploadComponent from "./Upload";

import "./styles.css";

class App extends React.Component {
  state = {
    upload: {
      pictures: [],
      maxFileSize: 5242880,
      imgExtension: [".jpg", ".png"],
      defaultImages: [
        "https://media.smarteragent.com/unsafe/http://cdn.photos.sparkplatform.com/fl/20190819183614687947000000-o.jpg",
        "https://media.smarteragent.com/unsafe/http://cdn.photos.sparkplatform.com/fl/20190819183639357715000000-o.jpg",
        "https://media.smarteragent.com/unsafe/http://cdn.photos.sparkplatform.com/fl/20190819183701098384000000-o.jpg"
      ]
    }
  };

  handleChange = files => {
    const { pictures } = this.state.upload;
    console.warn({ pictures, files });

    this.setState(
      {
        ...this.state,
        upload: {
          ...this.state.upload,
          pictures: [...pictures, ...files]
        }
      },
      () => {
        console.warn("It was added!");
      }
    );
  };

  confirmUpload = () => {
    const { pictures, defaultImages } = this.state.upload;
    console.warn("Confirm Upload =>", [...pictures]);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Testing `react-images-upload`</h2>

        <hr />

        <button onClick={this.confirmUpload}>Confirm upload</button>

        <UploadComponent
          {...this.state.upload}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
