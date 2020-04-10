import styled from 'styled-components';

export const OverloadedHospitalsContainer = styled.div`
  a {
    color: #3bbce6;
    text-decoration: none;
  }

  table {
    width: 800px;
    border: 1px solid #ccc;
    border-collapse: collapse;

    tr:first-child {
      background: #ccc; // dunno how to get this out of color standards
    }

    th,
    td {
      padding: 10px;
      margin: 0;
      width: auto;
      min-width: 50px;
      text-align: left;
    }

    td:last-child {
      width: 100px;

      // unsure how to target NavigateNextIcon more specifially in
      // styled-components paradigm
      svg {
        float: right;
      }
    }
  }
`;
