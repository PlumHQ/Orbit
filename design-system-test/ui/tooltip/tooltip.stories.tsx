import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './index';
import { Button } from '@pluminsurance/design-system-test.button';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component for displaying helpful information on hover.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="p-8">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        padding: '200px',
      }}
    >
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="secondary"
            styleVariant="beige"
            size="large"
            label="Tooltip Button"
            asChild={false}
          />
        </TooltipTrigger>
        <TooltipContent
          buttonLabel={'Next'}
          onButtonClick={() => { }}
          onClose={() => { }}
          isDissmisable
          headerText={'Header Text'}
          paragraphs={[
            'Groups are predefined sets of benefits that employees select during enrollment.',
            'You can find more information on the Groups page.',
          ]}
          currentProgress={2}
          totalSlides={5}
          variant="detailed"
          isCoachMark={true}
          position={'top'}
        >
          <div
            style={{
              borderRadius: '6px',
              border: '1px dashed rgba(168, 85, 247, 0.50)',
              background: 'rgba(168, 85, 247, 0.10)',
              padding: '24px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Slot (Swap it with your content.)
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
};

export const MultiplePlacements: Story = {
  render: () => (
    <div
      style={{
        padding: '300px',
      }}
    >
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="secondary"
            styleVariant="beige"
            size="large"
            label="Left Tooltip Button"
            asChild={false}
          />
        </TooltipTrigger>
        <TooltipContent
          buttonLabel={'Next'}
          onButtonClick={() => {}}
          onClose={() => {}}
          isDissmisable
          headerText={'Header Text'}
          paragraphs={[
            'Groups are predefined sets of benefits that employees select during enrollment.',
            'You can find more information on the Groups page.',
          ]}
          currentProgress={2}
          totalSlides={5}
          variant="detailed"
          isCoachMark={true}
          position={'left'}
        >
          <div
            style={{
              borderRadius: '6px',
              border: '1px dashed rgba(168, 85, 247, 0.50)',
              background: 'rgba(168, 85, 247, 0.10)',
              padding: '24px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Slot (Swap it with your content.)
          </div>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="secondary"
            styleVariant="beige"
            size="large"
            label="Top Tooltip Button"
            asChild={false}
          />
        </TooltipTrigger>
        <TooltipContent
          buttonLabel={'Next'}
          onButtonClick={() => { }}
          onClose={() => { }}
          isDissmisable
          headerText={'Header Text'}
          paragraphs={[
            'Groups are predefined sets of benefits that employees select during enrollment.',
            'You can find more information on the Groups page.',
          ]}
          currentProgress={2}
          totalSlides={5}
          variant="detailed"
          isCoachMark={true}
          position={'top'}
        >
          <div
            style={{
              borderRadius: '6px',
              border: '1px dashed rgba(168, 85, 247, 0.50)',
              background: 'rgba(168, 85, 247, 0.10)',
              padding: '24px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Slot (Swap it with your content.)
          </div>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="secondary"
            styleVariant="beige"
            size="large"
            label="Right Tooltip Button"
            asChild={false}
          />
        </TooltipTrigger>
        <TooltipContent
          buttonLabel={'Next'}
          onButtonClick={() => {}}
          onClose={() => {}}
          isDissmisable
          headerText={'Header Text'}
          paragraphs={[
            'Groups are predefined sets of benefits that employees select during enrollment.',
            'You can find more information on the Groups page.',
          ]}
          currentProgress={2}
          totalSlides={5}
          variant="detailed"
          isCoachMark={true}
          position={'right'}
        >
          <div
            style={{
              borderRadius: '6px',
              border: '1px dashed rgba(168, 85, 247, 0.50)',
              background: 'rgba(168, 85, 247, 0.10)',
              padding: '24px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Slot (Swap it with your content.)
          </div>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="secondary"
            styleVariant="beige"
            size="large"
            label="Bottom Tooltip Button"
            asChild={false}
          />
        </TooltipTrigger>
        <TooltipContent
          buttonLabel={'Next'}
          onButtonClick={() => {}}
          onClose={() => {}}
          isDissmisable
          headerText={'Header Text'}
          paragraphs={[
            'Groups are predefined sets of benefits that employees select during enrollment.',
            'You can find more information on the Groups page.',
          ]}
          currentProgress={2}
          totalSlides={5}
          variant="detailed"
          isCoachMark={true}
          position={'bottom'}
        >
          <div
            style={{
              borderRadius: '6px',
              border: '1px dashed rgba(168, 85, 247, 0.50)',
              background: 'rgba(168, 85, 247, 0.10)',
              padding: '24px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Slot (Swap it with your content.)
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};