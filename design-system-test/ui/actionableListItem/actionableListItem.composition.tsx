import React from 'react';
import { ActionableListItem } from './index';
import { HealthInsuraceIllustration } from '../illustrations';
import {
  InfoIcon,
  RightArrowIcon,
} from '../icons';

export const SelectLargeActionableListItem = () => {
  return (
    <div style={{ width: '562px' }}>
      <ActionableListItem
        behaviour="select"
        variant="primary"
        size="large"
        leadingAsset={HealthInsuraceIllustration}
        primaryText="Primary Text"
        secondaryTexts={['Text', 'Text', 'Text']}
        tertiaryText="Description"
        badgeText={'Badge'}
        badgeSize={'small'}
        badgeVariant={'primary'}
        badgeStyle={'positive'}
        leafletLeadingIcon={InfoIcon}
        leafletLeadingText="Here goes the text"
        leafletStyle="positive"
        leafletTrailingIcon={RightArrowIcon}
        leafletTrailingText="View Batch"
      />
    </div>
  );
};

export const ClickLargeActionableListItem = () => {
  return (
    <div style={{ width: '562px' }}>
      <ActionableListItem
        behaviour="click"
        variant="primary"
        size="large"
        leadingAsset={HealthInsuraceIllustration}
        primaryText="Primary Text"
        secondaryTexts={['Text', 'Text', 'Text']}
        tertiaryText="Description"
        // badgeText={'Badge'}
        // badgeSize={'small'}
        // badgeVariant={'positive'}
        // badgeStyle={'primary'}
        leafletLeadingIcon={InfoIcon}
        leafletLeadingText="Here goes the text"
        leafletStyle="positive"
        leafletTrailingIcon={RightArrowIcon}
        leafletTrailingText="View Batch"
      />
    </div>
  );
};

export const BadgeLargeActionableListItem = () => {
  return (
    <div style={{ width: '562px' }}>
      <ActionableListItem
        behaviour="click"
        variant="primary"
        size="large"
        leadingAsset={HealthInsuraceIllustration}
        primaryText="Primary Text"
        secondaryTexts={['Text', 'Text', 'Text']}
        tertiaryText="Description"
        badgeText={'Badge'}
        badgeSize={'small'}
        badgeVariant={'primary'}
        badgeStyle={'positive'}
        leafletLeadingIcon={InfoIcon}
        leafletLeadingText="Here goes the text"
        leafletStyle="positive"
        leafletTrailingIcon={RightArrowIcon}
        leafletTrailingText="View Batch"
      />
    </div>
  );
};

export const SecondaryLargeActionableListItem = () => {
  return (
    <div style={{ width: '562px' }}>
      <ActionableListItem
        behaviour="click"
        variant="secondary"
        size="large"
        leadingAsset={HealthInsuraceIllustration}
        primaryText="Primary Text"
        secondaryTexts={['Text', 'Text', 'Text']}
        tertiaryText="Description"
        callToAction="Read More"
      />
    </div>
  );
};

export const SelectMediumActionableListItem = () => {
  return (
    <div style={{ width: '562px' }}>
      <ActionableListItem
        behaviour="select"
        variant="primary"
        size="medium"
        leadingAsset={HealthInsuraceIllustration}
        primaryText="Primary Text"
        secondaryTexts={['Text', 'Text', 'Text']}
        tertiaryText="Description"
        badgeText={'Badge'}
        badgeSize={'small'}
        badgeVariant={'primary'}
        badgeStyle={'positive'}
        leafletLeadingIcon={InfoIcon}
        leafletLeadingText="Here goes the text"
        leafletStyle="positive"
        leafletTrailingIcon={RightArrowIcon}
        leafletTrailingText="View Batch"
      />
    </div>
  );
};

export const ClickMediumActionableListItem = () => {
  return (
    <div style={{ width: '562px' }}>
      <ActionableListItem
        behaviour="click"
        variant="primary"
        size="medium"
        leadingAsset={HealthInsuraceIllustration}
        primaryText="Primary Text"
        secondaryTexts={['Text', 'Text', 'Text']}
        tertiaryText="Description"
        // badgeText={'Badge'}
        // badgeSize={'small'}
        // badgeVariant={'positive'}
        // badgeStyle={'primary'}
        leafletLeadingIcon={InfoIcon}
        leafletLeadingText="Here goes the text"
        leafletStyle="positive"
        leafletTrailingIcon={RightArrowIcon}
        leafletTrailingText="View Batch"
      />
    </div>
  );
};

export const BadgeMediumActionableListItem = () => {
  return (
    <div style={{ width: '562px' }}>
      <ActionableListItem
        behaviour="click"
        variant="primary"
        size="medium"
        leadingAsset={HealthInsuraceIllustration}
        primaryText="Primary Text"
        secondaryTexts={['Text', 'Text', 'Text']}
        tertiaryText="Description"
        badgeText={'Badge'}
        badgeSize={'small'}
        badgeVariant={'primary'}
        badgeStyle={'positive'}
        leafletLeadingIcon={InfoIcon}
        leafletLeadingText="Here goes the text"
        leafletStyle="positive"
        leafletTrailingIcon={RightArrowIcon}
        leafletTrailingText="View Batch"
      />
    </div>
  );
};


