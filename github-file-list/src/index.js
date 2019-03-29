import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Time from "./time";
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

const FileListItem = ({file}) => (
    <tr className="file-list-item">
        <FileName file={file}/>
    </tr>
);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}

function FileName({file}) {
    return (
    <React.Fragment>
        <td className="file-icon">
            <FileIcon type={file.type}/>
        </td>
        <td className="file-name">
            {file.name}
        </td>
        <td className="commit-message">
            <CommitMessage message={file.lastestCommit.message}/>
        </td>
        <td className="age">
            <Time time={file.updated_at}/>
        </td>
    </React.Fragment>
)};

FileName.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

function FileIcon({type}) {
    return (
        <span>
            <i className={`fa fa-${type}`}></i>
        </span>
    );
};

FileIcon.propTypes = {
    type: PropTypes.string.isRequired

};

function CommitMessage({message}) {
    return (
    <span>
        {message}
    </span>
)};

CommitMessage.propTypes = {
    message: PropTypes.string
};

ReactDOM.render(<FileList files={testFiles}/>, document.getElementById("root"));