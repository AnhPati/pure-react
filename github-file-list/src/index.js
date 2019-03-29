import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import FileListItem from "./file-list-item";
import "./index.css";

const FileList = ({files}) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file}/>
            ))}
        </tbody>
    </table>
);

FileList.propTypes = {
    files: PropTypes.array
};

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        lastestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2017-07-11 21:24:00",
        lastestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        lastestCommit: {
            message: 'Added a readme'
        }
    },
];

ReactDOM.render(<FileList files={testFiles}/>, document.getElementById("root"));