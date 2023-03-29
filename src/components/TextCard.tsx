import * as React from "react";
import { TailwindComp } from "./Tailwind"

interface Props {
    title?: string,
    children?: string,
    size?: number,
}

interface State {
    title: string,
    children: string,
    size: number,
}

export class TextCard extends TailwindComp<Props, State> {
    public static defaultProps = {
        title: "Example",
        children: "No text defined",
        size: 3,
    }

    constructor(props) {
        super(props);
        this.state = {
            ...TextCard.defaultProps,
            ...props
        }
    }

    render = () => {
        const CustomHeadingTag = `h${this.props.size}` as keyof JSX.IntrinsicElements;
        return (
            <div className={
                "my-4 mx-2 " +
                "bg-white px-6 pt-10 pb-8 shadow-xl ring-1 " +
                "ring-gray-900/5 sm:rounded-lg sm:px-10" +
                (this.props.className ? " " + this.props.className : "")
            }>
                <CustomHeadingTag>
                    {this.state.title}
                </CustomHeadingTag>
                <div className="block">---</div>
                <p>{this.state.children}</p>
            </div >
        )
    }
}