import React from 'react';
import Dropzone from "react-dropzone";
import { Button } from 'reactstrap';
import { titleize } from './utils';

class MultiFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    const { files } = this.state;
    const previewedFiles = acceptedFiles.map((file) => {
      return (
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      );
    });
    this.setState({ files: files.concat(previewedFiles) });
  }

  hideFileUploader() {
    const { files } = this.state;
    return files.length <= 2;
  }

  handleOnClick() {
  }

  render() {
    const { files } = this.state;
    return (
      <React.Fragment>
        <div className='thumbsContainer'>
          {files.map((file) => {
            return (
              <div className='col' key={file.name}>
                <div className='row' key={file.name}>
                  <div className='thumb' key={file.name}>
                    <div className='thumbInner'>
                      <img
                        src={file.preview}
                        alt={''}
                        className='img'
                      />
                    </div>
                  </div>
                </div>
                <div className='row justify-content-center'>
                  <h6>{titleize(file.name)}</h6>
                </div>
              </div>
            );
          })}
          { this.hideFileUploader() &&
            <Dropzone onDrop={this.onDrop}>
            {
              ({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div className='align-items-center justify-content-center thumb' {...getRootProps()}>
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
          }
        </div>
        <br />
        <Button color='info' onClick={ () => { this.handleOnClick() }}>UPLOAD</Button>
      </React.Fragment>
    );
  }
}

export default MultiFileUpload;
