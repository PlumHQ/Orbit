import React from 'react';
import { FloatingButton } from './component';
import { RoundedAddIcon } from '../icons';

export const WhiteLargeFloatingButton = () => {
    return (
        <FloatingButton
            size="large"
            styleVariant='white'
            label="Button"
            iconOnly={false}
            leadingIcon={RoundedAddIcon}
        />
    )
}

export const WhiteMediumFloatingButton = () => {
    return (
        <FloatingButton
            size="medium"
            styleVariant='white'
            label="Button"
            iconOnly={false}
            leadingIcon={RoundedAddIcon}
        />
    )
}

export const WhiteLargeIconOnlyButton = () => {
    return (
        <FloatingButton
            size="large"
            styleVariant='white'
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
        />
    )
}

export const WhiteMediumIconOnlyButton = () => {
    return (
        <FloatingButton
            size="medium"
            styleVariant='white'
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
        />
    )
}


export const GrayLargeFloatingButton = () => {
    return (
        <FloatingButton
            size="large"
            styleVariant='gray'
            label="Button"
            iconOnly={false}
            leadingIcon={RoundedAddIcon}
        />
    )
}

export const GrayMediumFloatingButton = () => {
    return (
        <FloatingButton
            size="medium"
            styleVariant='gray'
            label="Button"
            iconOnly={false}
            leadingIcon={RoundedAddIcon}
        />
    )
}

export const GrayLargeIconOnlyButton = () => {
    return (
        <FloatingButton
            size="large"
            styleVariant='gray'
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
        />
    )
}

export const GrayMediumIconOnlyButton = () => {
    return (
        <FloatingButton
            size="medium"
            styleVariant='gray'
            iconOnly={true}
            leadingIcon={RoundedAddIcon}
        />
    )
}

