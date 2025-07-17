import { useAtom } from "jotai"
import { ToggleAtom } from "../jotai/ToggleAtom"

export const LightMode = () => {
    const [toggle, setToggle] = useAtom(ToggleAtom)
    return (
        <div
            className="light-mode"
            style={{
                backgroundColor: 'white',
                color: 'black',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Light Mode</h1>
            <button onClick={() => setToggle(!toggle)}>Dark</button>
        </div>

    )
}