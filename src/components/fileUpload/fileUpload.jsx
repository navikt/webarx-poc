import React from 'react';
import papaparse from 'papaparse';

const FileUpload = (props) => {
  function onFilesChange(file, setAttributes, setDataset, attributeTypeModel) {
    papaparse.parse(file, {
      complete(results) {
        if (results.data.length > 0) {
          const headers = results.data[0];
          setAttributes(headers.map(field => ({ field, attributeTypeModel })));
          setDataset(results.data);
        }
      },
    });
  }

  const content = (
    <div align="center">
      <input onChange={e => onFilesChange(e.target.files[0], props.setAttributes, props.setDataset, props.attributeTypeModel)} />
    </div>
  );
  return content;
};

export default FileUpload;