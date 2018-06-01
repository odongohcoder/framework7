import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7Row extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  onClick(e) {
    this.dispatchEvent('click', e);
  }
  render() {
    const self = this;
    const props = self.props;
    const {className, id, style, tag, noGap} = props;
    const RowTag = tag;
    const classes = Utils.classNames(className, 'row', { 'no-gap': noGap }, Mixins.colorClasses(props));
    return React.createElement(RowTag, {
      id: id,
      style: style,
      className: classes,
      onClick: self.onClick.bind(self)
    }, this.slots['default']);
  }
  get slots() {
    return __reactComponentSlots(this.props);
  }
  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }
}
__reactComponentSetProps(F7Row, {
  id: [
    String,
    Number
  ],
  noGap: Boolean,
  tag: {
    type: String,
    default: 'div'
  },
  ...Mixins.colorProps
});
export default F7Row;