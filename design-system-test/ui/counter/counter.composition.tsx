import React from 'react';
import { Counter } from './component';

export const LargePositiveCounter = () => {
    return <Counter size="large" styleVariant="positive" value={4} />;
}

export const LargeNegativeCounter = () => {
    return <Counter size="large" styleVariant="negative" value={4} />;
}

export const LargeNeutralCounter = () => {
    return <Counter size="large" styleVariant="neutral" value={4} />;
}
export const LargeNoticeCounter = () => {
    return <Counter size="large" styleVariant="notice" value={4} />;
}
export const LargeInformationCounter = () => {
    return <Counter size="large" styleVariant="information" value={4} />;
}
export const MediumPositiveCounter = () => {
    return <Counter size="medium" styleVariant="positive" value={4} />;
}
export const MediumNegativeCounter = () => {
    return <Counter size="medium" styleVariant="negative" value={4} />;
}
export const MediumNeutralCounter = () => {
    return <Counter size="medium" styleVariant="neutral" value={4} />;
}
export const MediumNoticeCounter = () => {
    return <Counter size="medium" styleVariant="notice" value={4} />;
}
export const MediumInformationCounter = () => {
    return <Counter size="medium" styleVariant="information" value={4} />;
}