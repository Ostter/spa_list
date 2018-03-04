import React from 'react';
import cx from 'classnames';

import './ColorPicker.less';

const COLORS = ['#ADADAD', '#FFF8DC', '#00BFFF', '#FFD700', '#32CD32', '#CCFF90', '#0000CD', '#FFA500'];

class ColorPicker extends React.Component {
    render() {
        return (
            <div className='ColorPicker'>
                {
                    COLORS.map(color =>
                        <div
                            key={color}
                            className={cx('ColorPicker__swatch', { selected: this.props.value === color })}
                            style={{ backgroundColor: color }}
                            onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
};

export default ColorPicker;
