import React from 'react';
import {Banner} from './index';
import { RightArrowIcon } from '@pluminsurance/design-system-test.icons';
import { HealthInsuraceIllustration, WalletIllustration } from '@pluminsurance/design-system-test.illustrations';

export const ExpandedAssetPositiveTrailingIconBanner = () => {
    return (
        <div
            style={{
                width: "600px"
            }}
        >
            <Banner 
                styleVariant='positive'
                layout='expanded'
                badgeText={"Badge"}
                leadingAsset={HealthInsuraceIllustration}
                trailingAsset={WalletIllustration}
                title='Placeholder'
                body={'This is paragraph text to show the maximum width of lines and how overflow would look like.'}
                trailingButtonText='Button'
                buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const ExpandedAssetNoticeLeadingIconBanner = () => {
    return (
        <div
            style={{
                width: "800px"
            }}
        >
            <Banner 
                styleVariant='notice'
                layout='expanded'
                badgeText={"Badge"}
                leadingAsset={HealthInsuraceIllustration}
                title='Placeholder'
                body={'This is paragraph text to show the maximum width of lines and how overflow would look like.'}
                trailingButtonText='Button'
                buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const ExpandedAssetNeutralLeadingIconBanner = () => {
    return (
        <div
            style={{
                width: "800px"
            }}
        >
            <Banner 
                styleVariant='neutral'
                layout='expanded'
                badgeText={"Badge"}
                leadingAsset={HealthInsuraceIllustration}
                title='Placeholder'
                body={'This is paragraph text to show the maximum width of lines and how overflow would look like.'}
                leadingButtonText='Button'
                buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const ExpandedAssetInformationLeadingIconBanner = () => {
    return (
        <div
            style={{
                width: "700px"
            }}
        >
            <Banner 
                styleVariant='information'
                layout='expanded'
                badgeText={"Badge"}
                trailingAsset={WalletIllustration}
                title='Placeholder'
                body={'This is paragraph text to show the maximum width of lines and how overflow would look like.'}
                leadingButtonText='Button'
                buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const ExpandedWithoutBadgeLeadingIconNegativeBanner = () => {
    return (
        <div
            style={{
                width: "600px"
            }}
        >
            <Banner 
                styleVariant='negative'
                layout='expanded'
                leadingAsset={HealthInsuraceIllustration}
                title='Placeholder'
                body={'This is paragraph text to show the maximum width of lines and how overflow would look like.'}
                trailingButtonText='Button'
                buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const CompactPositiveBanner = () => {
    return (
        <div
            style={{
                width: "600px"
            }}
        >
            <Banner 
                styleVariant='positive'
                layout='compact'
                title='Placeholder Text'
                trailingButtonText='Button'
                buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const CompactNoticeBanner = () => {
    return (
        <div
            style={{
                width: "600px"
            }}
        >
            <Banner 
                styleVariant='notice'
                layout='compact'
                title='Placeholder Text'
                // trailingButtonText='Button'
                // buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const CompactInformationBanner = () => {
    return (
        <div
            style={{
                width: "600px"
            }}
        >
            <Banner 
                styleVariant='information'
                layout='compact'
                title='Placeholder Text'
                trailingButtonText='Button'
                buttonTrailingIcon={RightArrowIcon}
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const CompactNeutralBanner = () => {
    return (
        <div
            style={{
                width: "600px"
            }}
        >
            <Banner 
                styleVariant='neutral'
                layout='compact'
                title='Placeholder Text'
                onButtonClick={()=>{}}
            />
        </div>
    )
}

export const CompactNegativeBanner = () => {
    return (
        <div
            style={{
                width: "600px"
            }}
        >
            <Banner 
                styleVariant='negative'
                layout='compact'
                title='Placeholder Text'
                onButtonClick={()=>{}}
            />
        </div>
    )
}