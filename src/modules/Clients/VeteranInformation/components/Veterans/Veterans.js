import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import { noop } from '../../../../../utils';

const Veterans = ({ veterans, setCurrentVeteran }) => (
  <div className="veterans">
    <Typography display="inline" variant="h4">Clients</Typography>
    <Typography display="inline" variant="h6">&nbsp;&nbsp;(Choose row to edit)</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Country</TableCell>
          <TableCell align="right">Branch</TableCell>
          <TableCell className="spacer" />
        </TableRow>
      </TableHead>
      <TableBody>
        {veterans.map(veteran => (
          <TableRow key={veteran.ID} hover onClick={() => setCurrentVeteran(veteran)}>
            <TableCell>{`${veteran.FirstName} ${veteran.LastName}`}</TableCell>
            <TableCell align="right">{veteran.StateBirth}</TableCell>
            <TableCell align="right">{veteran.Branch}</TableCell>
            <TableCell className="spacer" />
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Button className="new-veteran" onClick={() => setCurrentVeteran({})}>+ New</Button>
  </div>
);

Veterans.propTypes = {
  veterans: PropTypes.instanceOf(Array),
  setCurrentVeteran: PropTypes.func,
};

Veterans.defaultProps = {
  veterans: [],
  setCurrentVeteran: noop,
};

export default Veterans;
