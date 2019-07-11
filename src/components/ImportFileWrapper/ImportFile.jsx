import React, { useEffect } from 'react';
import ParseFile from '../../util/parseFile';
import DragAndDropFile from '../../util/dragAndDropFile';

const ImportFile = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset, defaultAttributeType,
  } = props;

  useEffect(() => {
    DragAndDropFile(setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
  });

  const content = (
    <div className="import-file">
      <form method="" action="" encType="multipart/form-data" noValidate="" className="box has-advanced-upload">
        <svg className="input-file-icon" width="50" height="43" viewBox="0 0 50 43"><path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z" /></svg>
        <br />
        <input
          type="file"
          id="file"
          name="files[]"
          className="input-file knapp knapp--standard"
          data-multiple-caption="{count} files selected"
          multiple=""
          onChange={
            (e) => {
              setLoadingDataset(true);
              ParseFile(
                e.target.files[0],
                setAttributes,
                setDataset,
                defaultAttributeType,
                setLoadingDataset,
              );
            }
          }
        />
      </form>
    </div>
  );
  return content;
};

export default ImportFile;
