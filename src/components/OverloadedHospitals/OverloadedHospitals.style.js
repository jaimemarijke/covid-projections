import styled from 'styled-components';

export const OverloadedHospitalsContainer = styled.div`
  width: 850px;

  a {
    color: #3bbce6;
    text-decoration: none;
  }

  table {
    width: 100%;
    clear: both;
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

  > p a {
    margin-left: 15px;
  }
`;

export const Filter = styled.div`
  width: 50%;
  height: 110px;
  margin-bottom: 10px;
  float: left;

  h4 {
    margin-top: 0;
  }
`;
