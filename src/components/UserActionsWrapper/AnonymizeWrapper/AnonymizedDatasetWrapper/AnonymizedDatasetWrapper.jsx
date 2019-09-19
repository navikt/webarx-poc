import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Alert } from 'reactstrap';
import AnonymizedDatasetTable from './AnonymizedDatasetTable/AnonymizedDatasetTable';
import DownloadAnonymizedDataset from './DownloadAnonymizedDataset/DownloadAnonymizedDataset';
import AttributeGeneralizationLevel from './AttributeGeneralizationLevel/AttributeGeneralizationLevel';
import AnalyzeResultWrapper from '../../AnalyzeWrapper/AnalyzeResultWrapper/AnalyzeResultWrapper';
import './__css__/AnonymizedDatasetWrapper.css';

const AnonymizedDatasetWrapper = (props) => {
  const {
    response, loadingAnonymize, fileName, attributes,
  } = props;
  const {
    message,
  } = response;

  let content = '';

  const anonymizedFileName = fileName.toString().replace('.csv', '').concat('_anonymized.csv');
  console.log();

  if (message) {
    return (
      <div className="result-wrapper">
        <Alert color="danger">
          <b>
            Something went wrong.
            <br />
            Error:
          </b>
          {message}
        </Alert>
      </div>
    );
  }
  if (loadingAnonymize) {
    content = (
      <div className="anonymized-dataset-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (response.anonymizeResult) {
    content = (
      <div className="anonymized-dataset-wrapper">
        <h4>Anonymization Result</h4>
        <AnonymizedDatasetTable anonymizeResult={response.anonymizeResult} />
        <DownloadAnonymizedDataset
          anonymizeResult={response.anonymizeResult}
          fileName={fileName}
        />
        <div className="col-12">
          <Ekspanderbartpanel tittel="Analysis Result" apen="{true}" border>
            <AnalyzeResultWrapper
              response={response.riskProfile}
              loadingAnalyze={loadingAnonymize}
              file={anonymizedFileName}
              attributes={attributes}
            />
          </Ekspanderbartpanel>
          <Ekspanderbartpanel tittel="Attribute Generalization Level" border>
            <AttributeGeneralizationLevel
              attributeGeneralization={response.anonymizeResult.metrics.attributeGeneralization}
            />
          </Ekspanderbartpanel>
        </div>
      </div>
    );
  }
  return content;
};
export default AnonymizedDatasetWrapper;
