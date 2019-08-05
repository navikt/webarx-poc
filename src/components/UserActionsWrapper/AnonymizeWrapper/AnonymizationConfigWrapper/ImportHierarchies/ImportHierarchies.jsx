import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachFile from '@material-ui/icons/AttachFile';
import FileCopy from '@material-ui/icons/FileCopy';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import handleHierarchyUpload from '../../../../../util/handleHierarchyUpload';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  input: {
    display: 'none',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    margin: '0 0 0 1em',
  },
});

const ImportHierarchies = (props) => {
  const classes = useStyles();

  const {
    attributes, setAttributes,
  } = props;

  // Used to force rerender when attributes is updated
  const [refresh, setRefresh] = useState(false);

  const newSetAttributes = (newAttributes) => {
    setAttributes(newAttributes);
    setRefresh(!refresh);
  };

  const content = (
    <div className="hierarchy-import" align="center">
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {attributes.map(({ field, attributeTypeModel }, index) => {
            if (attributeTypeModel === 'QUASIIDENTIFYING') {
              return (
                <div key={field}>
                  <Divider />
                  <ListItem>
                    {attributes[index].fileName
                      ? (
                        <Tooltip title={attributes[index].fileName} placement="top">
                          <ListItemIcon>
                            <FileCopy color="primary" />
                          </ListItemIcon>
                        </Tooltip>

                      )
                      : (
                        <ListItemIcon>
                          <AttachFile />
                        </ListItemIcon>
                      )}
                    <ListItemText primary={field} />
                    <label htmlFor={`contained-button-file-${index}`}>
                      <Button variant="contained" component="span">
                        <input
                          className={classes.input}
                          id={`contained-button-file-${index}`}
                          type="file"
                          onChange={(e) => {
                            if (e.target.files[0]) {
                              handleHierarchyUpload(
                                e.target.files[0], index, attributes, newSetAttributes,
                              );
                            }
                          }}
                        />
                      Import
                      </Button>
                    </label>
                  </ListItem>

                </div>
              );
            }
            return null;
          })
        }
        </List>
      </div>
    </div>
  );
  return content;
};
export default ImportHierarchies;