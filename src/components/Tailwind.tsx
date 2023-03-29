import * as React from "react";

export class TailwindComp<
    P = {},
    S = {},
    SS = any
> extends React.Component<
    P & { className?: string },
    S,
    SS
> {
    constructor(props: P & { className?: string }) {
        super(props)
    }
}


