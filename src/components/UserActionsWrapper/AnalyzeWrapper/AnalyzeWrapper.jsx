import React from 'react';
import PropTypes from 'prop-types';
import AnalyzeButton from '../../AnalyzeButton/AnalyzeButton';
import AnalysisWrapper from '../../AnalyzeResultWrapper/AnalyzeResultWrapper';

const AnalyzeWrapper = (props) => {
  const {
    dataset,
    attributes,
    endpoint,
    loadingAnalyze,
    setLoadingAnalyze,
    setAnalyzeResponse,
    analyzeResponse,
  } = props;
  return (
    <div>
      <br />
      <AnalyzeButton
        setLoadingAnalyze={setLoadingAnalyze}
        dataset={dataset}
        attributes={attributes}
        endpoint={endpoint}
        setResponse={setAnalyzeResponse}
      />
      <AnalysisWrapper
        response={analyzeResponse}
        loadingAnalyze={loadingAnalyze}
      />
      <br />
    </div>
  );
};

AnalyzeWrapper.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.array).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  endpoint: PropTypes.string.isRequired,
  loadingAnalyze: PropTypes.bool.isRequired,
  setLoadingAnalyze: PropTypes.func.isRequired,
  setAnalyzeResponse: PropTypes.func.isRequired,
  analyzeResponse: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default AnalyzeWrapper;