import { useAtom } from "jotai"
import { ToggleAtom } from "../jotai/ToggleAtom"


export const DarkMode = () => {
    const [toggle, setToggle] = useAtom(ToggleAtom)
    return (

        <div
            className="dark-mode"
            style={{
                backgroundColor: 'black',
                color: 'white',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Dark Mode</h1>
            <button onClick={() => setToggle(!toggle)}>Light</button>
        </div>


    )
}