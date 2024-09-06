import React from 'react'

interface Props {
    className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            {children}
        </div>
    )
}