import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import {
  OverloadedHospitalsContainer,
  // Filter,
} from './OverloadedHospitals.style';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default class OverloadedHospitals extends React.Component {
  constructor() {
    super();
    this.state = { numCounties: 10 };
    this.counties = getHospitalizationData();
    this.counties.forEach(county => {
      // county.lastUpdatedDate = moment(county.lastUpdatedDate);
      county.projections.hospitalBeds.peakDate = moment(
        county.projections.hospitalBeds.peakDate,
      );
      county.projections.hospitalBeds.shortageStartDate = moment(
        county.projections.hospitalBeds.shortageStartDate,
      );
    });
    this.counties = _.sortBy(
      this.counties,
      'projections.hospitalBeds.shortageStartDate',
    );
  }

  seeMore = e => {
    this.setState({ numCounties: this.state.numCounties + 10 });
    e.preventDefault();
    return false;
  };

  /*
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
  */
  render() {
    return (
      <OverloadedHospitalsContainer>
        <h1>Counties most at risk of hospital overload from COVID</h1>

        <table>
          <tr>
            <th></th>
            <th>County, State</th>
            <th>Overload</th>
            <th>Peak</th>
            <th>Deaths</th>
            <th></th>
          </tr>
          {_.take(this.counties, this.state.numCounties).map(
            ({ countyName, stateName, projections }, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>
                  <strong>{countyName}</strong>
                  <br />
                  {stateName}
                </td>
                <td>
                  {projections.hospitalBeds.shortageStartDate.format('MMM D')}
                </td>
                <td>{projections.hospitalBeds.peakDate.format('MMM D')}</td>
                <td>{projections.aggregateDeaths}</td>
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
          Showing <strong>{this.state.numCounties} counties</strong>{' '}
          <a href="#" onClick={this.seeMore}>
            See more
          </a>
        </p>
      </OverloadedHospitalsContainer>
    );
  }
}

function getHospitalizationData() {
  // this is a stub for now, will need to async from data.covidactnow.org
  return [
    {
      stateName: 'New York',
      countyName: 'New York City',
      fips: '36061',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 2199,
        hospitalBeds: {
          peakShortfall: 24949,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-10T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Suffolk',
      fips: '36103',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 397,
        hospitalBeds: {
          peakShortfall: 5493,
          peakDate: '2020-04-30T00:00:00',
          shortageStartDate: '2020-04-07T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Nassau',
      fips: '36059',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 393,
        hospitalBeds: {
          peakShortfall: 4871,
          peakDate: '2020-04-26T00:00:00',
          shortageStartDate: '2020-04-10T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Westchester',
      fips: '36119',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 296,
        hospitalBeds: {
          peakShortfall: 4217,
          peakDate: '2020-04-26T00:00:00',
          shortageStartDate: '2020-03-30T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Salt Lake',
      fips: '49035',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 206,
        hospitalBeds: {
          peakShortfall: 3623,
          peakDate: '2020-06-17T00:00:00',
          shortageStartDate: '2020-05-20T00:00:00',
        },
      },
    },
    {
      stateName: 'Michigan',
      countyName: 'Wayne',
      fips: '26163',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 353,
        hospitalBeds: {
          peakShortfall: 2641,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Bergen',
      fips: '34003',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 228,
        hospitalBeds: {
          peakShortfall: 2358,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Utah',
      fips: '49049',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 86,
        hospitalBeds: {
          peakShortfall: 2308,
          peakDate: '2020-06-29T00:00:00',
          shortageStartDate: '2020-05-24T00:00:00',
        },
      },
    },
    {
      stateName: 'Connecticut',
      countyName: 'Fairfield',
      fips: '09001',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 174,
        hospitalBeds: {
          peakShortfall: 2298,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Minnehaha',
      fips: '46099',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 78,
        hospitalBeds: {
          peakShortfall: 2206,
          peakDate: '2020-05-13T00:00:00',
          shortageStartDate: '2020-05-01T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Hudson',
      fips: '34017',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 157,
        hospitalBeds: {
          peakShortfall: 1873,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-10T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Rockland',
      fips: '36087',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 109,
        hospitalBeds: {
          peakShortfall: 1829,
          peakDate: '2020-04-22T00:00:00',
          shortageStartDate: '2020-04-03T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Union',
      fips: '34039',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 133,
        hospitalBeds: {
          peakShortfall: 1726,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-10T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Davis',
      fips: '49011',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 52,
        hospitalBeds: {
          peakShortfall: 1619,
          peakDate: '2020-06-25T00:00:00',
          shortageStartDate: '2020-05-08T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Pennington',
      fips: '46103',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 44,
        hospitalBeds: {
          peakShortfall: 1537,
          peakDate: '2020-05-25T00:00:00',
          shortageStartDate: '2020-05-09T00:00:00',
        },
      },
    },
    {
      stateName: 'Michigan',
      countyName: 'Macomb',
      fips: '26099',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 127,
        hospitalBeds: {
          peakShortfall: 1518,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-18T00:00:00',
        },
      },
    },
    {
      stateName: 'Washington',
      countyName: 'Snohomish',
      fips: '53061',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 98,
        hospitalBeds: {
          peakShortfall: 1337,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-18T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Orange',
      fips: '36071',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 102,
        hospitalBeds: {
          peakShortfall: 1334,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-10T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Passaic',
      fips: '34031',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 121,
        hospitalBeds: {
          peakShortfall: 1208,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Ocean',
      fips: '34029',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 112,
        hospitalBeds: {
          peakShortfall: 1156,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-18T00:00:00',
        },
      },
    },
    {
      stateName: 'Maryland',
      countyName: "Prince George's",
      fips: '24033',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 73,
        hospitalBeds: {
          peakShortfall: 1107,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-04-22T00:00:00',
        },
      },
    },
    {
      stateName: 'Iowa',
      countyName: 'Polk',
      fips: '19153',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 54,
        hospitalBeds: {
          peakShortfall: 1105,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-06-09T00:00:00',
        },
      },
    },
    {
      stateName: 'Washington',
      countyName: 'King',
      fips: '53033',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 224,
        hospitalBeds: {
          peakShortfall: 1067,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-05-15T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Middlesex',
      fips: '34023',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 154,
        hospitalBeds: {
          peakShortfall: 1035,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-30T00:00:00',
        },
      },
    },
    {
      stateName: 'Arkansas',
      countyName: 'Benton',
      fips: '05007',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 22,
        hospitalBeds: {
          peakShortfall: 988,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-06-05T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Lincoln',
      fips: '46083',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 24,
        hospitalBeds: {
          peakShortfall: 975,
          peakDate: '2020-05-17T00:00:00',
          shortageStartDate: '2020-04-23T00:00:00',
        },
      },
    },
    {
      stateName: 'Massachusetts',
      countyName: 'Norfolk',
      fips: '25021',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 91,
        hospitalBeds: {
          peakShortfall: 909,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'Nebraska',
      countyName: 'Douglas',
      fips: '31055',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 66,
        hospitalBeds: {
          peakShortfall: 852,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-06-13T00:00:00',
        },
      },
    },
    {
      stateName: 'Louisiana',
      countyName: 'Orleans',
      fips: '22071',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 115,
        hospitalBeds: {
          peakShortfall: 828,
          peakDate: '2020-04-26T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Essex',
      fips: '34013',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 177,
        hospitalBeds: {
          peakShortfall: 790,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-30T00:00:00',
        },
      },
    },
    {
      stateName: 'Nebraska',
      countyName: 'Sarpy',
      fips: '31153',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 15,
        hospitalBeds: {
          peakShortfall: 782,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-24T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Tulsa',
      fips: '40143',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 92,
        hospitalBeds: {
          peakShortfall: 767,
          peakDate: '2020-06-25T00:00:00',
          shortageStartDate: '2020-06-13T00:00:00',
        },
      },
    },
    {
      stateName: 'Massachusetts',
      countyName: 'Essex',
      fips: '25009',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 103,
        hospitalBeds: {
          peakShortfall: 760,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-05-08T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Canadian',
      fips: '40017',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 16,
        hospitalBeds: {
          peakShortfall: 740,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-04T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Monmouth',
      fips: '34025',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 115,
        hospitalBeds: {
          peakShortfall: 732,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-30T00:00:00',
        },
      },
    },
    {
      stateName: 'Massachusetts',
      countyName: 'Plymouth',
      fips: '25023',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 67,
        hospitalBeds: {
          peakShortfall: 723,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Washington',
      fips: '49053',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 15,
        hospitalBeds: {
          peakShortfall: 722,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-28T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Oklahoma',
      fips: '40109',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 108,
        hospitalBeds: {
          peakShortfall: 721,
          peakDate: '2020-06-29T00:00:00',
          shortageStartDate: '2020-06-13T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Cleveland',
      fips: '40027',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 50,
        hospitalBeds: {
          peakShortfall: 720,
          peakDate: '2020-06-17T00:00:00',
          shortageStartDate: '2020-05-24T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Brookings',
      fips: '46011',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 13,
        hospitalBeds: {
          peakShortfall: 553,
          peakDate: '2020-05-21T00:00:00',
          shortageStartDate: '2020-04-27T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Cache',
      fips: '49005',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 11,
        hospitalBeds: {
          peakShortfall: 539,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-24T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Brown',
      fips: '46013',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 15,
        hospitalBeds: {
          peakShortfall: 530,
          peakDate: '2020-05-17T00:00:00',
          shortageStartDate: '2020-05-01T00:00:00',
        },
      },
    },
    {
      stateName: 'Iowa',
      countyName: 'Dallas',
      fips: '19049',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 12,
        hospitalBeds: {
          peakShortfall: 487,
          peakDate: '2020-06-25T00:00:00',
          shortageStartDate: '2020-04-22T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Morris',
      fips: '34027',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 93,
        hospitalBeds: {
          peakShortfall: 455,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-05-08T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Dutchess',
      fips: '36027',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 53,
        hospitalBeds: {
          peakShortfall: 451,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'Arkansas',
      countyName: 'Saline',
      fips: '05125',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 14,
        hospitalBeds: {
          peakShortfall: 450,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-28T00:00:00',
        },
      },
    },
    {
      stateName: 'Colorado',
      countyName: 'Jefferson',
      fips: '08059',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 42,
        hospitalBeds: {
          peakShortfall: 444,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-05-11T00:00:00',
        },
      },
    },
    {
      stateName: 'Iowa',
      countyName: 'Linn',
      fips: '19113',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 42,
        hospitalBeds: {
          peakShortfall: 433,
          peakDate: '2020-06-17T00:00:00',
          shortageStartDate: '2020-05-28T00:00:00',
        },
      },
    },
    {
      stateName: 'Illinois',
      countyName: 'Will',
      fips: '17197',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 51,
        hospitalBeds: {
          peakShortfall: 416,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-05-15T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Meade',
      fips: '46093',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 10,
        hospitalBeds: {
          peakShortfall: 414,
          peakDate: '2020-05-29T00:00:00',
          shortageStartDate: '2020-05-09T00:00:00',
        },
      },
    },
    {
      stateName: 'Iowa',
      countyName: 'Scott',
      fips: '19163',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 23,
        hospitalBeds: {
          peakShortfall: 409,
          peakDate: '2020-06-25T00:00:00',
          shortageStartDate: '2020-06-05T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Somerset',
      fips: '34035',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 51,
        hospitalBeds: {
          peakShortfall: 406,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-30T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Rogers',
      fips: '40131',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 8,
        hospitalBeds: {
          peakShortfall: 405,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-24T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Codington',
      fips: '46029',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 11,
        hospitalBeds: {
          peakShortfall: 404,
          peakDate: '2020-05-17T00:00:00',
          shortageStartDate: '2020-04-27T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Lawrence',
      fips: '46081',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 10,
        hospitalBeds: {
          peakShortfall: 387,
          peakDate: '2020-05-17T00:00:00',
          shortageStartDate: '2020-04-27T00:00:00',
        },
      },
    },
    {
      stateName: 'Arkansas',
      countyName: 'Faulkner',
      fips: '05045',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 17,
        hospitalBeds: {
          peakShortfall: 379,
          peakDate: '2020-06-25T00:00:00',
          shortageStartDate: '2020-05-28T00:00:00',
        },
      },
    },
    {
      stateName: 'Pennsylvania',
      countyName: 'Monroe',
      fips: '42089',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 28,
        hospitalBeds: {
          peakShortfall: 370,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Wagoner',
      fips: '40145',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 14,
        hospitalBeds: {
          peakShortfall: 365,
          peakDate: '2020-06-17T00:00:00',
          shortageStartDate: '2020-05-04T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Tooele',
      fips: '49045',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 8,
        hospitalBeds: {
          peakShortfall: 355,
          peakDate: '2020-06-29T00:00:00',
          shortageStartDate: '2020-05-04T00:00:00',
        },
      },
    },
    {
      stateName: 'Virginia',
      countyName: 'Prince William',
      fips: '51153',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 20,
        hospitalBeds: {
          peakShortfall: 339,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-04-30T00:00:00',
        },
      },
    },
    {
      stateName: 'Illinois',
      countyName: 'Lake',
      fips: '17097',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 58,
        hospitalBeds: {
          peakShortfall: 338,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-05-15T00:00:00',
        },
      },
    },
    {
      stateName: 'Wyoming',
      countyName: 'Laramie',
      fips: '56021',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 15,
        hospitalBeds: {
          peakShortfall: 335,
          peakDate: '2020-06-25T00:00:00',
          shortageStartDate: '2020-05-24T00:00:00',
        },
      },
    },
    {
      stateName: 'Michigan',
      countyName: 'Oakland',
      fips: '26125',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 191,
        hospitalBeds: {
          peakShortfall: 332,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-05-15T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Creek',
      fips: '40037',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 12,
        hospitalBeds: {
          peakShortfall: 315,
          peakDate: '2020-06-17T00:00:00',
          shortageStartDate: '2020-05-08T00:00:00',
        },
      },
    },
    {
      stateName: 'Nebraska',
      countyName: 'Lancaster',
      fips: '31109',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 20,
        hospitalBeds: {
          peakShortfall: 315,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-06-25T00:00:00',
        },
      },
    },
    {
      stateName: 'Georgia',
      countyName: 'Gwinnett',
      fips: '13135',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 43,
        hospitalBeds: {
          peakShortfall: 310,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-05-19T00:00:00',
        },
      },
    },
    {
      stateName: 'Washington',
      countyName: 'Yakima',
      fips: '53077',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 24,
        hospitalBeds: {
          peakShortfall: 309,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-04-22T00:00:00',
        },
      },
    },
    {
      stateName: 'Massachusetts',
      countyName: 'Middlesex',
      fips: '25017',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 191,
        hospitalBeds: {
          peakShortfall: 306,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-05-19T00:00:00',
        },
      },
    },
    {
      stateName: 'Louisiana',
      countyName: 'Jefferson',
      fips: '22051',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 111,
        hospitalBeds: {
          peakShortfall: 305,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Beadle',
      fips: '46005',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 7,
        hospitalBeds: {
          peakShortfall: 290,
          peakDate: '2020-05-13T00:00:00',
          shortageStartDate: '2020-04-19T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Pottawatomie',
      fips: '40125',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 7,
        hospitalBeds: {
          peakShortfall: 285,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-28T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Davison',
      fips: '46035',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 7,
        hospitalBeds: {
          peakShortfall: 280,
          peakDate: '2020-05-21T00:00:00',
          shortageStartDate: '2020-05-05T00:00:00',
        },
      },
    },
    {
      stateName: 'Louisiana',
      countyName: 'Ascension',
      fips: '22005',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 18,
        hospitalBeds: {
          peakShortfall: 268,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Summit',
      fips: '49043',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 12,
        hospitalBeds: {
          peakShortfall: 268,
          peakDate: '2020-05-12T00:00:00',
          shortageStartDate: '2020-03-26T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Payne',
      fips: '40119',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 9,
        hospitalBeds: {
          peakShortfall: 264,
          peakDate: '2020-06-29T00:00:00',
          shortageStartDate: '2020-06-01T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Sussex',
      fips: '34037',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 18,
        hospitalBeds: {
          peakShortfall: 263,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'New Jersey',
      countyName: 'Gloucester',
      fips: '34015',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 22,
        hospitalBeds: {
          peakShortfall: 259,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-05-04T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Iron',
      fips: '49021',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 5,
        hospitalBeds: {
          peakShortfall: 257,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-16T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Hughes',
      fips: '46065',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 6,
        hospitalBeds: {
          peakShortfall: 255,
          peakDate: '2020-05-21T00:00:00',
          shortageStartDate: '2020-05-01T00:00:00',
        },
      },
    },
    {
      stateName: 'Arkansas',
      countyName: 'Washington',
      fips: '05143',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 16,
        hospitalBeds: {
          peakShortfall: 251,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-06-25T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Putnam',
      fips: '36079',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 17,
        hospitalBeds: {
          peakShortfall: 247,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'Arizona',
      countyName: 'Navajo',
      fips: '04017',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 17,
        hospitalBeds: {
          peakShortfall: 247,
          peakDate: '2020-05-19T00:00:00',
          shortageStartDate: '2020-04-14T00:00:00',
        },
      },
    },
    {
      stateName: 'Utah',
      countyName: 'Box Elder',
      fips: '49003',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 5,
        hospitalBeds: {
          peakShortfall: 241,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-24T00:00:00',
        },
      },
    },
    {
      stateName: 'Maryland',
      countyName: 'Howard',
      fips: '24027',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 18,
        hospitalBeds: {
          peakShortfall: 235,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-05-08T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Union',
      fips: '46127',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 6,
        hospitalBeds: {
          peakShortfall: 235,
          peakDate: '2020-05-21T00:00:00',
          shortageStartDate: '2020-05-01T00:00:00',
        },
      },
    },
    {
      stateName: 'Tennessee',
      countyName: 'Sumner',
      fips: '47165',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 21,
        hospitalBeds: {
          peakShortfall: 234,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'New York',
      countyName: 'Ulster',
      fips: '36111',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 22,
        hospitalBeds: {
          peakShortfall: 234,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Comanche',
      fips: '40031',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 15,
        hospitalBeds: {
          peakShortfall: 233,
          peakDate: '2020-06-29T00:00:00',
          shortageStartDate: '2020-06-09T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Osage',
      fips: '40113',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 8,
        hospitalBeds: {
          peakShortfall: 225,
          peakDate: '2020-06-21T00:00:00',
          shortageStartDate: '2020-04-30T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Grady',
      fips: '40051',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 4,
        hospitalBeds: {
          peakShortfall: 224,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-28T00:00:00',
        },
      },
    },
    {
      stateName: 'Colorado',
      countyName: 'Eagle',
      fips: '08037',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 12,
        hospitalBeds: {
          peakShortfall: 223,
          peakDate: '2020-05-15T00:00:00',
          shortageStartDate: '2020-03-26T00:00:00',
        },
      },
    },
    {
      stateName: 'Arkansas',
      countyName: 'Crittenden',
      fips: '05035',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 10,
        hospitalBeds: {
          peakShortfall: 220,
          peakDate: '2020-06-09T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Clay',
      fips: '46027',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 5,
        hospitalBeds: {
          peakShortfall: 217,
          peakDate: '2020-05-17T00:00:00',
          shortageStartDate: '2020-04-27T00:00:00',
        },
      },
    },
    {
      stateName: 'Colorado',
      countyName: 'Weld',
      fips: '08123',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 34,
        hospitalBeds: {
          peakShortfall: 217,
          peakDate: '2020-05-27T00:00:00',
          shortageStartDate: '2020-05-11T00:00:00',
        },
      },
    },
    {
      stateName: 'Nebraska',
      countyName: 'Hall',
      fips: '31079',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 12,
        hospitalBeds: {
          peakShortfall: 212,
          peakDate: '2020-06-13T00:00:00',
          shortageStartDate: '2020-05-12T00:00:00',
        },
      },
    },
    {
      stateName: 'Oklahoma',
      countyName: 'Logan',
      fips: '40083',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 3,
        hospitalBeds: {
          peakShortfall: 210,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-05-16T00:00:00',
        },
      },
    },
    {
      stateName: 'Arkansas',
      countyName: 'Pope',
      fips: '05115',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 7,
        hospitalBeds: {
          peakShortfall: 206,
          peakDate: '2020-07-03T00:00:00',
          shortageStartDate: '2020-06-01T00:00:00',
        },
      },
    },
    {
      stateName: 'Iowa',
      countyName: 'Muscatine',
      fips: '19139',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 9,
        hospitalBeds: {
          peakShortfall: 202,
          peakDate: '2020-06-09T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'Georgia',
      countyName: 'Cherokee',
      fips: '13057',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 11,
        hospitalBeds: {
          peakShortfall: 201,
          peakDate: '2020-06-15T00:00:00',
          shortageStartDate: '2020-04-26T00:00:00',
        },
      },
    },
    {
      stateName: 'South Dakota',
      countyName: 'Lake',
      fips: '46079',
      lastUpdatedDate: '4/9/2020 23:02',
      projections: {
        aggregateDeaths: 5,
        hospitalBeds: {
          peakShortfall: 197,
          peakDate: '2020-05-23T00:00:00',
          shortageStartDate: '2020-05-03T00:00:00',
        },
      },
    },
  ];
}
