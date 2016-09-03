import * as React from "react";
import { Foo } from "./Foo";

export interface AppProps {
    name:string;
}

export class App extends React.Component<AppProps, {}> {
    constructor(props:AppProps) {
        super(props);
        // We have to bind methods with this because you don't use
        // React.createClass that does it automatically.:
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(`Hello ${this.props.name}`);
    }

    render() {
        return <div>
            <h1>
                Hello {this.props.name}!
            </h1>
            <a href='#' onClick={this.handleClick}>Click me!</a>
            <Foo />
        </div>;
    }
}