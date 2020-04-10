import React from 'react';

import {
  OverloadedHospitalsContainer,
  Filter,
} from './OverloadedHospitals.style';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function getHospitalizationData() {
  // this is a stub for now, will need to async from data.covidactnow.org
  return [
    {
      county: 'New York County',
      state: 'New York',
      overloaded_at: 'Apr 9',
      peak_at: 'May 10',
      deaths: 640000,
    },
    {
      county: 'Orleans Parish',
      state: 'Louisiana',
      overloaded_at: 'Apr 9',
      peak_at: 'May 10',
      deaths: 640000,
    },
    {
      county: 'Harris County',
      state: 'Texas',
      overloaded_at: 'Apr 9',
      peak_at: 'May 10',
      deaths: 640000,
    },
  ];
}

export default function OverloadedHospitals() {
  return (
    <OverloadedHospitalsContainer>
      <h1>Counties most at risk of hospital overload from COVID</h1>
      <Filter>
        <h4>Viewing</h4>
        <ToggleButtonGroup
          value="counties"
          exclusive
          // onChange={handleAlignment}
          // aria-label="text alignment"
        >
          <ToggleButton value="counties" aria-label="counties">
            Counties
          </ToggleButton>
          <ToggleButton value="states" aria-label="states">
            States
          </ToggleButton>
        </ToggleButtonGroup>
      </Filter>
      <Filter>
        <h4>Assuming stay at home compliance is</h4>
      </Filter>
      <table>
        <tr>
          <th></th>
          <th>County, State</th>
          <th>Overload</th>
          <th>Peak</th>
          <th>Deaths</th>
          <th></th>
        </tr>
        {getHospitalizationData().map(
          ({ county, state, overloaded_at, peak_at, deaths }, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>
                <strong>{county}</strong>
                <br />
                {state}
              </td>
              <td>{overloaded_at}</td>
              <td>{peak_at}</td>
              <td>{deaths}</td>
              <td>
                <a href="#">
                  Details <NavigateNextIcon />
                </a>
              </td>
            </tr>
          ),
        )}
      </table>
      <p>
        Showing <strong>50 counties</strong> <a href="#">See more</a>
      </p>
    </OverloadedHospitalsContainer>
  );
}
