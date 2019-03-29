import React from "react";
import PropTypes from "prop-types";
import FileName from "./file-name";
import "./index.css";

const FileListItem = ({file}) => (
    <tr className="file-list-item">
        <FileName file={file}/>
    </tr>
);

export default FileListItem;