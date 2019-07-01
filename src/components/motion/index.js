
import React from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';
import { range } from 'lodash';

const springSetting1 = { stiffness: 180, damping: 10 };
const springSetting2 = { stiffness: 120, damping: 17 };
function reinsert(arr, from, to) {
    const _arr = arr.slice(0);
    const val = _arr[from];
    _arr.splice(from, 1);
    _arr.splice(to, 0, val);
    return _arr;
}

function clamp(n, min, max) {
    return Math.max(Math.min(n, max), min);
}

const [count, width, height] = [1, 70, 90];
// indexed by visual position
const layout = range(count).map(n => {
    const row = Math.floor(n / 3);
    const col = n % 3;
    return [width * col, height * row];
});

export default class MotonButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseXY: [0, 0],
            mouseCircleDelta: [0, 0], // difference between mouse and circle pos for x + y coords, for dragging
            lastPress: null, // key of the last pressed component
            isPressed: false,
            order: range(count), // index: visual position. value: component key/id
        };
    };
    initialXY = null


    componentDidMount() {
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleMouseUp);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    };

    getDistance = (pointOne, pointTwo) => {
        let a = pointOne[0] - pointTwo[0];
        let b = pointOne[1] - pointTwo[1];

        let c = Math.sqrt(a * a + b * b);
        return c
    }

    handleTouchStart = (key, pressLocation, e) => {
        this.handleMouseDown(key, pressLocation, e.touches[0]);
    };

    handleTouchMove = (e) => {
        e.preventDefault();
        this.handleMouseMove(e.touches[0]);
    };

    handleMouseMove = ({ pageX, pageY }) => {
        const { order, lastPress, isPressed, mouseCircleDelta: [dx, dy] } = this.state;
        if (isPressed) {
            const mouseXY = [pageX - dx, pageY - dy];
            const distance = this.getDistance(this.initialXY, mouseXY)
            if (distance < 250) {
                this.setState({ mouseXY });
            }

        }
    };

    handleMouseDown = (key, [pressX, pressY], { pageX, pageY }) => {
        this.setState({
            lastPress: key,
            isPressed: true,
            mouseCircleDelta: [pageX - pressX, pageY - pressY],
            mouseXY: [pressX, pressY],
        });
    };

    handleMouseUp = () => {
        this.setState({ isPressed: false, mouseCircleDelta: [0, 0] });
    };

    render() {
        const { order, lastPress, isPressed, mouseXY } = this.state;
        const { motonButtonClass } = this.props;
        return (
            <div className="motion-button-container">
                {order.map((_, key) => {
                    let style;
                    let x;
                    let y;
                    const visualPosition = order.indexOf(key);
                    if (key === lastPress && isPressed) {
                        [x, y] = mouseXY;
                        style = {
                            translateX: x,
                            translateY: y,
                            scale: spring(1.2, springSetting1),
                            boxShadow: spring((x - (3 * width - 50) / 2) / 15, springSetting1),
                        };
                    } else {
                        [x, y] = layout[visualPosition];
                        style = {
                            translateX: spring(x, springSetting2),
                            translateY: spring(y, springSetting2),
                            scale: spring(1, springSetting1),
                            boxShadow: spring((x - (3 * width - 50) / 2) / 15, springSetting1),
                        };
                    }
                    if (!this.initialXY) this.initialXY = [x, y]
                    return (
                        <Link to={window.location.pathname == "/about" ? "/" : "/about"}>
                            <Motion key={key} style={style} onPress={() => {
                                if (window.location.pathname == "/about") {

                                } else {

                                }
                            }}>
                                {({ translateX, translateY, scale, boxShadow }) =>
                                    <div
                                        onMouseDown={this.handleMouseDown.bind(null, key, [x, y])}
                                        onTouchStart={this.handleTouchStart.bind(null, key, [x, y])}
                                        className={"motion-button " + motonButtonClass}
                                        style={{
                                            WebkitTransform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                                            transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                                            zIndex: key === lastPress ? 99 : visualPosition,
                                            boxShadow: `${boxShadow}px 5px 5px rgba(0,0,0,0.5)`,
                                        }}
                                    >
                                        <i className="material-icons">keyboard_arrow_left</i>
                                    </div>
                                }
                            </Motion>
                        </Link>
                    );
                })}
            </div>
        );
    };
}

MotonButton.defaultProps = {
    motonButtonClass: ""
}