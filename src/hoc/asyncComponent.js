import React, {Component} from 'react';

// path 만 받아서 구현할 수 있지 않을까 싶지만
// webpack이 의존성 파악할 때 기준 경로는 현재 파일 기준이기 때문에
// 비동기 import를 사용하려는 파일에서 import 구문을 function 형식으로 넘겨주어서 사용해야 한다.
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
};

export default asyncComponent;