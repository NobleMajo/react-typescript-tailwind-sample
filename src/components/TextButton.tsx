import * as React from "react";
import { TailwindComp } from "./Tailwind"

interface Props {
    callback?: (button: TextButton) => Promise<void> | void,
    text?: string,
}

interface State {
    text: string,
    callback: (button: TextButton) => Promise<void> | void,
}

export class TextButton extends TailwindComp<Props, State> {
    static defaultProps = {
        callback: (button: TextButton) => console.log("TextButton: Clicked!"),
        text: "Click me!",
    };

    constructor(props) {
        super(props);
        this.state = {
            ...TextButton.defaultProps,
            ...this.props,
        }
    }

    render = () => {
        return (
            <button onClick={() => this.state.callback(this)} className={
                "my-4 mx-2 bg-white dark:bg-gray-800 c" +
                "bg-white px-6 pt-10 pb-8 shadow-xl ring-1 " +
                "ring-gray-900/5 sm:rounded-lg sm:px-10" +
                (this.props.className ? " " + this.props.className : "")
            }>
                {this.state.text}
            </button>
        )
    }
}