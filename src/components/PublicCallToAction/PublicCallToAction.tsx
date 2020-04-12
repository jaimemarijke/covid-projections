import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import ShareBlock from 'components/ShareBlock/ShareBlock';
import Newsletter from 'components/Newsletter/Newsletter';

import {
  ListIconNumber,
  PublicCallToActionHeader,
  PublicCallToActionColumn,
  PublicCallToActionContainer,
  PublicCallToActionContentBlock,
  PublicCallToActionContentContainer,
} from './PublicCallToAction.style';

import ProgressBar from './ProgressBar';

const PublicCallToAction = () => {
  return (
    <PublicCallToActionContainer>
      {/* Column 1 */}
      <PublicCallToActionColumn flexGrow={1}>
        <PublicCallToActionHeader variant="h4">
          How citizens can help
        </PublicCallToActionHeader>
        <ContentBlock number={1} header="Continue staying inside">
          {[
            'Only leave for essential activities',
            'Where a mask if you do leave',
            'Encourages others to do the same',
          ].map(text => (
            <Typography>{text}</Typography>
          ))}
        </ContentBlock>
        <ContentBlock number={2} header="Share this information">
          <Typography>
            <strong>Save lives</strong> by sharing with your friends, family,
            coworkers, and neighbors.
          </Typography>
          <ShareBlock />
        </ContentBlock>
        <ContentBlock number={3} header="Get the latest updates from us">
          <Typography>
            We’ll email you a daily digest with updated stats and the day’s most
            interesting Covid-related stories
          </Typography>
          <Newsletter />
        </ContentBlock>
      </PublicCallToActionColumn>
      {/* Column 2 */}
      <PublicCallToActionColumn flexGrow={2}>
        <PublicCallToActionHeader variant="h4">
          How policy makers can help
        </PublicCallToActionHeader>
        {[
          {
            description: 'Public gatherings banned',
            current: 38,
          },
          {
            description: 'Restaurants and bars closed',
            current: 47,
          },
          {
            description: 'Judicial enforcement of shelter-in-place',
            current: 12,
          },
          {
            description: 'Giving everyone a puppy or two',
            current: 8,
          },
        ].map(props => (
          <ProgressBar {...props} total={50} entity="state" verb="adopted" />
        ))}
      </PublicCallToActionColumn>
    </PublicCallToActionContainer>
  );
};

const ContentBlock = ({
  icon,
  number,
  header,
  children,
}: {
  icon?: React.ReactNode;
  number?: number;
  header: string;
  children: React.ReactNode;
}) => (
  <PublicCallToActionContentBlock>
    {icon || <ListIconNumber>{number}</ListIconNumber>}
    <PublicCallToActionContentContainer>
      <PublicCallToActionHeader variant="h6">{header}</PublicCallToActionHeader>
      {children}
    </PublicCallToActionContentContainer>
  </PublicCallToActionContentBlock>
); // Icon will supercede number

export default PublicCallToAction;
