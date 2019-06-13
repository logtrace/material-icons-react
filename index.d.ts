import React from 'react';

interface Props {
    icon: string,
    size?: number | string,
    invert?: bool,
    inactive?: bool,
    color?: string,
}

declare function MaterialIcon(p: Props): React.ReactNode;

export default MaterialIcon;

