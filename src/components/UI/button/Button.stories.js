import { Button } from './Button';


export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },

};


export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
    },
};

export const Success = {
    args: {
        success: true,
        label: 'Button',
    },
};

export const Danger = {
    args: {
        label: 'Button',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
