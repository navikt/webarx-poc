/* eslint-disable max-len */
import React from 'react';
import './__css__/GeneralInformation.css';
import QuestionMarkHelpText from './GeneralInformationHelpText/QuestionMarkHelpText';
import AttributeTypesDescription from '../AttributeTypesDescription/AttributeTypesDescription';

const GeneralInformation = () => {
  const content = (
    <div className="general-information">
      <h1>General Information</h1>
      <br />
      <div className="general-information-attribute">
        <table>
          <tbody>
            <tr>
              <td><p><b>Question mark help text:</b></p></td>
            </tr>
            <tr>
              <td><QuestionMarkHelpText /></td>
            </tr>
            <tr>
              <td><p>Click the question mark to display help text.</p></td>
            </tr>
          </tbody>
        </table>
        <p><b>CSV import file:</b></p>
        <ul>
          <li>
            <p>
              To display Æ, Ø, and Å, make sure the imported tabular dataset is saved as a CSV file with UTF-8.
            </p>
          </li>
        </ul>
        <AttributeTypesDescription />
        <p><b>Prosecutor model:</b></p>
        <ul>
          <li>
            <p>
              In the prosecutor model the attacker targets a specific individual,
              <br />
              and it is assumed that the attacker already knows that data about the
               individual, is contained in the dataset.
            </p>
          </li>
        </ul>
        <p><b>Privacy models:</b></p>
        <br />
        <p><b>k-Anonymity</b></p>
        <ul>
          <li>
            <p>
              This well-known privacy model aims at protecting dataset from
               re-identification in the prosecutor model.
              <br />
              A dataset is k-anonymous if each record cannot be distinguished from at
               least k-1 other records regarding the quasi-identifiers.
              <br />
              Each group of indistinguishable records forms a so-called equivalence class.
            </p>
          </li>
        </ul>
        <p><b>ℓ-Diversity</b></p>
        <ul>
          <li>
            <p>
              This privacy model can be used to protect data against attribute disclosure
               by ensuring that each sensitive attribute has at least
              <br />
              ℓ well represented values in each equivalence class.
            </p>
          </li>
        </ul>
        <p><b>t-Closeness</b></p>
        <ul>
          <li>
            <p>
              This privacy model can also be used to protect data from attribute disclosure.
               It requires that the distributions of values of a
              <br />
              sensitive attribute within each equivalence class must have a distance of not
               more than t to the distribution of the attribute values in the input dataset.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );

  return content;
};

export default GeneralInformation;