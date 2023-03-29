import * as React from "react";

export function defaultBrowserDarkMode(): boolean {
    return window.matchMedia &&
        window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches
}

export function DarkModeToggle(props) {
    let childs = props.children ?? []
    const tailwindClass =
        "my-4 mx-2 bg-white dark:bg-gray-800 " +
        "bg-white px-6 pt-10 pb-8 shadow-xl ring-1 " +
        "ring-gray-900/5 sm:rounded-lg sm:px-10 " +
        (
            typeof props.className == "string" ?
                props.className :
                ""
        )

    console.log("default mode: ", defaultBrowserDarkMode())

    const [state, setState] = React.useState({
        darkMode: defaultBrowserDarkMode()
    })

    const isModeInitialized = () => {
        return document.body.classList.contains("dark") ||
            document.body.classList.contains("light")
    }

    const enableDarkMode = () => {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
        setState({ darkMode: true })
        console.log("set dark mode to: true")
    }

    const disableDarkMode = () => {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        setState({ darkMode: false })
        console.log("set dark mode to: false")
    }

    const toggleDarkMode = () => {
        console.log("toggle dark mode: ", state.darkMode)
        if (state.darkMode) {
            disableDarkMode()
        } else {
            enableDarkMode()
        }
    }

    if (!isModeInitialized()) {
        if (state.darkMode) {
            enableDarkMode()
        } else {
            disableDarkMode()
        }
    }

    const mode = state.darkMode ? "Dark" : "Light"
    const toggleMode = state.darkMode ? "Light" : "Dark"

    let headerText = props.header
    if (headerText) {
        headerText = headerText
        .split("$MODE").join(mode)
        .split("$TOGGLE_MODE").join(toggleMode)
    }
    let normalText = props.text
    if (normalText) {
        normalText = normalText
        .split("$MODE").join(mode)
        .split("$TOGGLE_MODE").join(toggleMode)
    }

    if (typeof headerText == "string") {
        childs.push(
            <h1 key="header">{headerText}</h1>
        )
    }

    if (typeof normalText == "string") {
        childs.push(
            <span key="text">{normalText}</span>
        )
    }

    return (
        <>
            <button
                className={tailwindClass}
                onClick={() => toggleDarkMode()}
            >
                {childs}
            </button>
        </>
    )
}