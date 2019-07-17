import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Table from './Table/Table';
import AnalyzeButton from './AnalyzeButton/AnalyzeButton';
import ExportAttribute from './ExportAttributeType/ExportAttributeType';
import ImportAttribute from './ImportAttributeType/ImportAttributeType';
import AnonymizeButton from './AnonymizeButton/AnonymizeButton';
import AnonymizeConfigWrapper from './AnonymizeConfigWrapper/AnonymizeConfigWrapper';
import './__css__/TableWrapper.css';

const TableWrapper = (props) => {
  const {
    loadingDataset, setLoadingAnalysis, setAttributes, dataset, attributes, endpoint, setResponse,
    setOperation, privacyModels, setPrivacyModels, suppressionLimit, setSuppressionLimit, operation,
  } = props;

  let content = '';

  if (loadingDataset) {
    content = (
      <div className="table-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (dataset) {
    content = (
      <div className="table-wrapper">
        <div className="row">
          <div className="col-6">
            <ImportAttribute setAttributes={setAttributes} />
          </div>
          <div className="col-6">
            <ExportAttribute AttributeTypes={attributes} />
          </div>

        </div>
        <div className="dataset-table">
          <Table
            setAttributes={setAttributes}
            dataset={dataset}
            attributes={attributes}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <AnalyzeButton
              setLoadingAnalysis={setLoadingAnalysis}
              dataset={dataset}
              attributes={attributes}
              endpoint={endpoint}
              setResponse={setResponse}
              setOperation={setOperation}
            />
          </div>
          <div className="col-6">
            <AnonymizeButton setOperation={setOperation} />
          </div>
          <div>
            <AnonymizeConfigWrapper
              setAttributes={setAttributes}
              attributes={attributes}
              privacyModels={privacyModels}
              setPrivacyModels={setPrivacyModels}
              suppressionLimit={suppressionLimit}
              setSuppressionLimit={setSuppressionLimit}
              operation={operation}
            />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default TableWrapper;
