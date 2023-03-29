import * as React from "react";
import { TailwindComp } from "./Tailwind"

interface Props {
    title?: string,
    children?: string,
    size?: number,
    imagePercents?: number,
    imageSrc: string,
    altText?: string,
    left?: boolean,
}

interface State {
    title: string,
    children: string,
    size: number,
    imagePercents: number,
    imageSrc: string,
    altText: string,
    left: boolean,
}

export class ImageCard extends TailwindComp<Props, State> {
    public static defaultProps = {
        title: "Example",
        text: "A nice text here!",
        size: 3,
        left: false,
        imagePercents: 40,
        altText: "Can't load image!",
    }

    constructor(props) {
        super(props);
        this.state = {
            ...ImageCard.defaultProps,
            ...props
        }
    }

    render = () => {
        const CustomHeadingTag = `h${this.state.size}` as keyof JSX.IntrinsicElements;
        if (!this.state.imagePercents) {
            this.setState({
                imagePercents: 50
            })
        } else if (this.state.imagePercents < 1) {
            this.setState({
                imagePercents: 1
            })
        } else if (this.state.imagePercents > 99) {
            this.setState({
                imagePercents: 99
            })
        }
        const imageComponent = <img
            src={this.state.imageSrc}
            alt={this.state.altText}
        >
        </img>

        return (
            <div className={
                "my-4 mx-2 bg-white dark:bg-gray-800 " +
                "bg-white px-6 pt-10 pb-8 shadow-xl ring-1 " +
                "ring-gray-900/5 sm:rounded-lg sm:px-10" +
                (this.props.className ? " " + this.props.className : "")
            }>
                {this.state.left && imageComponent}
                <span>
                    <CustomHeadingTag>
                        {this.state.title}
                    </CustomHeadingTag>
                    <div className="block">---</div>
                    <p >
                        {this.state.children}
                    </p>
                </span>
                {!this.state.left && imageComponent}
            </div >
        )
    }
}