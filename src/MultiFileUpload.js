import React from 'react';
import Dropzone from "react-dropzone";

class MultiFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({ files: this.state.files.concat(acceptedFiles) }, () => {
      console.log(this.state.files);
    });
  }

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {
          ({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <h6>Drop image here...</h6> :
                    <h6>Drop your images here Or click to add image</h6>
                }
              </div>
            )
          }
        }
      </Dropzone>
    );
  }
}

export default MultiFileUpload;
