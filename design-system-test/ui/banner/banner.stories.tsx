import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Banner } from './index';
import { DownloadIcon, InfoIcon, RightArrowIcon } from '@pluminsurance/design-system-test.icons';
import { HealthInsuraceIllustration, WalletIllustration } from '@pluminsurance/design-system-test.illustrations';

const meta: Meta<typeof Banner> = {
  title: 'Design System/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A banner component for displaying important messages and notifications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: { type: 'select' },
      options: ['positive', 'negative', 'neutral', 'information', 'notice'],
      description: 'The style variant of the banner',
    },
    layout: {
      control: { type: 'select' },
      options: ['compact', 'expanded'],
      description: 'The layout of the banner',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the banner',
    },
    body: {
      control: { type: 'text' },
      description: 'The body content of the banner',
    },
    trailingButtonText: {
      control: { type: 'text' },
      description: 'The text of the trailing button',
    },
    buttonLeadingIcon: {
      control: { type: 'select' },
      options: [DownloadIcon, RightArrowIcon],
      description: 'The leading icon of the button',
    },
    buttonTrailingIcon: {
      control: { type: 'select' },
      options: [DownloadIcon, RightArrowIcon],
      description: 'The trailing icon of the button',
    },
    trailingAsset: {
      control: { type: 'select' },
      options: [WalletIllustration, HealthInsuraceIllustration],
      description: 'The trailing asset of the banner',
    },
    badgeText: {
      control: { type: 'text' },
      description: 'The text of the badge',
    },
    leadingAsset: { 
      control: { type: 'select' },
      options: [WalletIllustration, HealthInsuraceIllustration],
      description: 'The leading asset of the banner',
    },
    leadingButtonText: {
      control: { type: 'text' },
      description: 'The text of the leading button',
    },
  },
  args: {
    styleVariant: 'neutral',
    layout: 'compact',
    title: 'Banner Title',
    body: 'This is a banner message with important information.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    styleVariant: 'neutral',
    layout: "expanded",
    title: 'Information',
    body: 'This is an informational banner message.',
    buttonTrailingIcon: RightArrowIcon,
    buttonLeadingIcon: DownloadIcon,
    trailingAsset: WalletIllustration,
    onButtonClick: () => {
      console.log('Button clicked');
    },
    leadingAsset: HealthInsuraceIllustration,
  },
};

export const AllCompactVariants: Story = {
  render: (args) => (
    <div className="space-y-4 w-100">
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="positive" layout="compact" title="Success" body="Operation completed successfully." trailingButtonText="Button 1" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="negative" layout="compact" title="Negative" body="An error occurred during processing." trailingButtonText="Button 2" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="neutral" layout="compact" title="Neutral" body="Here's some helpful information." trailingButtonText="Button 3" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="information" layout="compact" title="Information" body="Please review this important notice." trailingButtonText="Button 4" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="notice" layout="compact" title="Notice" body="Please review this important notice." trailingButtonText="Button 4" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="positive" layout="compact" title="Success" body="Operation completed successfully." buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="negative" layout="compact" title="Negative" body="An error occurred during processing." buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="neutral" layout="compact" title="Neutral" body="Here's some helpful information." buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="information" layout="compact" title="Information" body="Please review this important notice." buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="notice" layout="compact" title="Notice" body="Please review this important notice." buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} />
    </div>
  ),
  args: {},
};

export const AllExpandedVariants: Story = {
  render: (args) => (
    <div className="space-y-4 w-full w-100">
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="positive" layout="expanded" title="Success" body="Operation completed successfully." trailingButtonText="Button 1" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} trailingAsset={WalletIllustration} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="negative" layout="expanded" title="Negative" body="An error occurred during processing." trailingButtonText="Button 2" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} trailingAsset={WalletIllustration} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="neutral" layout="expanded" title="Neutral" body="Here's some helpful information." trailingButtonText="Button 3" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} trailingAsset={WalletIllustration} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="information" layout="expanded" title="Information" body="Please review this important notice." trailingButtonText="Button 4" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} trailingAsset={WalletIllustration} />
      <Banner badgeText="Scheduled" leadingAsset={HealthInsuraceIllustration} styleVariant="notice" layout="expanded" title="Notice" body="Please review this important notice." trailingButtonText="Button 4" buttonLeadingIcon={DownloadIcon} buttonTrailingIcon={RightArrowIcon} trailingAsset={WalletIllustration} />
    </div>
  ),
  args: {},
};