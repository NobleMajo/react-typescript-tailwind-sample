import * as React from "react";

interface Props {
    children: React.ReactNode
}

interface State {
}

export class FlexRowContainer extends React.Component<Props, State> {
    public static defaultProps = {
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className="w-[100%] flex flex-column flex-nowrap justify-center align-center bg-white dark:bg-gray-800">
                <div className="max-w-[1680px] min-w-[380px] w-[100%] flex flex-row flex-wrap justify-evenly align-baseline bg-white dark:bg-gray-800">
                    {this.props.children}
                </div>
            </div>
        )
    }
}