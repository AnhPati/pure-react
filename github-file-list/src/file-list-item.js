import React from "react";
import PropTypes from "prop-types";
import FileIcon from "./file-icon";
import CommitMessage from "./commit-message";
import Time from "./time";
import "./index.css";

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

export default FileListItem;