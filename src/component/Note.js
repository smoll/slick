import React from 'react'
import {Icon, Intent, Popover, PopoverInteractionKind, Position} from '@blueprintjs/core'
import ReactMarkdown from 'react-markdown'

export default ({text}) => (
  <Popover
    interactionKind={PopoverInteractionKind.HOVER}
    popoverClassName="pt-popover-content-sizing"
    position={Position.RIGHT}
>
    <Icon iconName="pt-icon-info-sign" iconSize={16} intent={Intent.PRIMARY} />
    <ReactMarkdown source={text} />
</Popover>
)
