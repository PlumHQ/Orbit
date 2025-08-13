import React from 'react';
import { Card } from './component';

export const LargePrimaryCard = () => {
    return (
        <Card size={'large'} cardStyle={'primary'}>
            <div style={{ background: 'lightpink', padding: 16 }}>
                Large Primary Card
            </div>
        </Card>
    );
};
export const MediumPrimaryCard = () => {
    return (
        <Card size={'medium'} cardStyle={'primary'}>
            <div style={{ background: 'lightblue', padding: 16 }}>
                Medium Primary Card
            </div>
        </Card>
    );
};
export const SmallPrimaryCard = () => {
    return (
        <Card size={'small'} cardStyle={'primary'}>
            <div style={{ background: 'lightyellow', padding: 16 }}>
                Small Primary Card
            </div>
        </Card>
    );
};
export const LargeSecondaryCard = () => {
    return (
        <Card size={'large'} cardStyle={'secondary'}>
            <div style={{ background: 'lightpink', padding: 16 }}>
                Large Secondary Card
            </div>
        </Card>
    );
};
export const MediumSecondaryCard = () => {
    return (
        <Card size={'medium'} cardStyle={'secondary'}>
            <div style={{ background: 'lightblue', padding: 16 }}>
                Medium Secondary Card
            </div>
        </Card>
    );
};
export const SmallSecondaryCard = () => {
    return (
        <Card size={'small'} cardStyle={'secondary'}>
            <div style={{ background: 'lightyellow', padding: 16 }}>
                Small Secondary Card
            </div>
        </Card>
    );
};
export const LargePositiveCard = () => {
    return (
        <Card size={'large'} cardStyle={'positive'}>
            <div style={{ background: 'lightpink', padding: 16 }}>
                Large Positive Card
            </div>
        </Card>
    );
};
export const MediumPositiveCard = () => {
    return (
        <Card size={'medium'} cardStyle={'positive'}>
            <div style={{ background: 'lightblue', padding: 16 }}>
                Medium Secondary Card
            </div>
        </Card>
    );
};
export const SmallPositiveCard = () => {
    return (
        <Card size={'small'} cardStyle={'positive'}>
            <div style={{ background: 'lightyellow', padding: 16 }}>
                Small Primary Card
            </div>
        </Card>
    );
};
export const LargeNegativeCard = () => {
    return (
        <Card size={'large'} cardStyle={'negative'}>
            <div style={{ background: 'lightpink', padding: 16 }}>
                Large Negative Card
            </div>
        </Card>
    );
};

export const MediumNegativeCard = () => {
    return (
        <Card size={'large'} cardStyle={'negative'}>
            <div style={{ background: 'lightblue', padding: 16 }}>
                Medium Secondary Card
            </div>
        </Card>
    );
};

export const SmallNegativeCard = () => {
    return (
        <Card size={'small'} cardStyle={'negative'}>
            <div style={{ background: 'lightyellow', padding: 16 }}>
                Small Secondary Card
            </div>
        </Card>
    );
};
