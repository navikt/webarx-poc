import React, { useEffect } from 'react';
import ParseFile from '../../../util/parseFile';
import DragAndDropFile from '../../../util/dragAndDropFile';
import './__css__/ImportDataset.css';

const ImportDataset = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset, defaultAttributeType, setFileName, dataset,
  } = props;
  useEffect(() => {
    DragAndDropFile(setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
  });

  let importDatasetFormStyle = 'import-dataset-form has-advanced-upload';
  let onRow = '';
  if (dataset.length > 1) {
    importDatasetFormStyle = 'import-dataset-form has-data has-advanced-upload';
    onRow = 'row';
  }

  const content = (
    <div className="import-dataset">
      <form method="" action="" encType="multipart/form-data" noValidate="" className={importDatasetFormStyle}>
        <div className="container container-fluid mt-1">
          <div className={onRow}>
            <div className="col">
              <svg className="import-dataset-icon" width="45" height="40" viewBox="0 0 50 43"><path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z" /></svg>
            </div>
            <div className="col">
              <b><p>Import dataset CSV file:</p></b>
              <input
                type="file"
                className="import-dataset-input knapp knapp--standard"
                onChange={
                  (e) => {
                    if (e.target.files[0]) {
                      setFileName(e.target.files[0].name);
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
                }
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  return content;
};

export default ImportDataset;
