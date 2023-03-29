import * as React from "react";
import { TailwindComp } from "./Tailwind"

interface Props {
    callback?: (button: ImageButton) => Promise<void> | void,
    imageSrc: string,
    altText: string,
}

interface State {
    callback: (button: ImageButton) => Promise<void> | void,
    imageSrc: string,
    altText: string,
}

export class ImageButton extends TailwindComp<Props, State> {
    static defaultProps = {
        callback: (button: ImageButton) => console.log("ImageButton: Clicked!"),
        altText: "Can't load image!",
    };

    constructor(props) {
        super(props);
        this.state = {
            ...ImageButton.defaultProps,
            ...props
        }
    }

    render = () => {
        return (
            <button onClick={() => this.state.callback(this)} className={
                "my-4 mx-2 bg-white dark:bg-gray-800 " +
                "bg-white px-6 pt-10 pb-8 shadow-xl ring-1 " +
                "ring-gray-900/5 sm:rounded-lg sm:px-10" +
                (this.props.className ? " " + this.props.className : "")
            }>
                <img src={this.state.imageSrc} alt={this.state.altText}></img>
            </button >
        )
    }
}