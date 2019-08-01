import React from 'react';
import ImportDataset from './ImportDataset/ImportDataset';
import './__css__/ImportDatasetWrapper.css';

const ImportDatasetWrapper = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset, setFileName, dataset,
  } = props;

  const content = (
    <div className="import-dataset-wrapper">
      <ImportDataset
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
        setFileName={setFileName}
        dataset={dataset}
      />
    </div>
  );

  return content;
};

export default ImportDatasetWrapper;
