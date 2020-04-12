import styled from 'styled-components';
import palette from 'assets/theme/palette';
import Typography from '@material-ui/core/Typography';

export const ShareSpacer = styled.div`
  padding-right: 32px;

  @media (max-width: 600px) {
    padding-right: 16px;
  }
`;

export const ShareContainer = styled.div<{ condensed?: boolean }>`
  background: ${palette.white};
  max-width: 640px;
  margin: ${props => (props.condensed ? 0 : '1rem auto')};
  padding: 0.5rem;
`;

export const ShareInstruction = styled(Typography)<{ component?: string }>`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.6rem;
  color: ${palette.black};
  text-align: center;
`;

export const ShareButtonContainer = styled.div<{ reflow: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 -0.75rem;

  > div {
    margin: 0 0.75rem;
  }

  @media (max-width: 600px) {
    margin: -0.5rem;
    flex-wrap: ${props => (props.reflow ? 'wrap' : 'nowrap')};

    > div {
      margin: 0.5rem;
      min-width: ${props => (props.reflow ? '40%' : '0')};
    }
  }
`;

export const ShareTypeDivider = styled.div`
  border-top: 1px solid ${palette.divider};
  margin: 1.5rem -1.5rem;
`;

export const StyledShareButton = styled.div<{
  color: string;
  disableElevation?: boolean /* seems to do nothing? */;
  variant?: string;
}>`
  background-color: ${props => props.color};
  border-radius: 5px;
  cursor: pointer;
  color: white;
  display: block;
  flex: 1;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  height: 2.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
  user-select: none;
  text-align: center;

  > button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  svg {
    display: block;
  }
`;
