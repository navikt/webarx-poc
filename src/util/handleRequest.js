import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleRequest(
  setLoadingFunction, service, endpoint, setResponse, datasetFile, attributes,
  privacyModels = [], suppressionLimit = null,
) {
  if (datasetFile && attributes && privacyModels) {
    const formData = new FormData();
    formData.append('file', datasetFile);
    const payload = BuildPayload(attributes, privacyModels, suppressionLimit);
    formData.append('payload', JSON.stringify(payload));
    ArxRequest(setLoadingFunction, endpoint, payload, service, setResponse);
  } else if (datasetFile && attributes) {
    const formData = new FormData();
    formData.append('file', datasetFile);
    const payload = BuildPayload(attributes);
    formData.append('payload', JSON.stringify(payload));
    ArxRequest(setLoadingFunction, endpoint, payload, service, setResponse);
  }
}
