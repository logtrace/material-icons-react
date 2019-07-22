import React from 'react';

type Size = "tiny" | "small" | "medium" | "large";

interface Props {
    icon: string,
    size?: number | Size,
    invert?: bool,
    inactive?: bool,
    color?: string,
}

declare function MaterialIcon(p: Props): React.ReactNode;

export default MaterialIcon;

