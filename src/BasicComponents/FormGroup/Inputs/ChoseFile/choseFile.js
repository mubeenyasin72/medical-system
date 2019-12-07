import './choseFile.css';

import React, { Component } from 'react';

class ChoseFile extends Component {
    state = { 
        fileName: ''
     }

    //  fileChose = e =>{
    //     switch (e.target.name) {
    //         // Updated this
    //         case 'selectedFile':
    //           if(e.target.files.length > 0) {
    //               // Accessed .name from file 
    //               this.setState({ fileName: e.target.files[0].name });
    //           }
    //         break;
    //         default:
    //           this.setState({ [e.target.name]: e.target.value });
    //        }
    //     };

    render() { 
        // const { fileName } = this.state; 
        // let file = null;

        // file = this.state.fileName?
        //     (<span>File Selected - {this.state.fileName[0]}</span>):
        //     (<span>Upload Cheque Copy</span>)
        return (
            <React.Fragment>
                <label 
                    for="chose"
                    class="chose-file-label form-control"
                >
                    <div class="ml-3 float-left">Upload Cheque copy</div>
                    <img 
                        class="chose-file-icon"
                        src={require('../../../../Assets/Icons/ChoseFile/upload.svg')}
                        alt="upload-file"
                    />
                </label>
                <input
                    id="chose"
                    class="invisible"
                    type="file"
                    onChange={ (event) => this.fileChose(event) }
                />
            </React.Fragment>
         );
    }
}
 
export default ChoseFile;