import React from 'react';
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from './component';
import { Button } from '../button';

export function TopTooltipDemo() {
  return (
    <div
      style={{
        padding: '350px',
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
  );
}

export function BottomTooltipDemo() {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(true);
  return (
    <div
      style={{
        padding: '350px 350px 0px 350px',
      }}
    >
      <Tooltip
        isTooltipOpen={isTooltipOpen}
      >
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
          onButtonClick={() => {}}
          onClose={() => {setIsTooltipOpen(false)}}
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
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quasi
        voluptas dignissimos, aliquam nisi exercitationem minus eum
        reprehenderit voluptatem qui nihil quae, et sequi nostrum? Magni
        cupiditate unde voluptates quae. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Doloribus sint ad accusamus qui rem debitis labore
        atque consequatur corrupti, earum blanditiis eaque recusandae, eligendi
        illo dignissimos mollitia? Perspiciatis, veniam eveniet.
      </p>
    </div>
  );
}

export function TopStartTooltipDemo() {
  return (
    <div
      style={{
        padding: '350px',
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
          position={'top'}
          align={'start'}
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
  );
}

export function BottomEndTooltipDemo() {
  return (
    <div
      style={{
        padding: '350px',
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
          align={'end'}
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
  );
}

export function LeftTooltipDemo() {
  return (
    <div
      style={{
        padding: '350px',
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
    </div>
  );
}

export function RightTooltipDemo() {
  return (
    <div
      style={{
        padding: '350px',
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
    </div>
  );
}

export function BasicTooltipDemo() {
  return (
    <div
      style={{
        padding: '350px',
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
          onButtonClick={() => {}}
          onClose={() => {}}
          headerText={'Tooltip'}
          variant={'compact'}
        />
      </Tooltip>
    </div>
  );
}
