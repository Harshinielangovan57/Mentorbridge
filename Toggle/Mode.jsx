import { useAtom } from 'jotai';
import { ToggleAtom } from '../jotai/ToggleAtom';
import { LightMode } from './LightMode';
import { DarkMode } from './DarkMode';

export const Mode = () => {
    const [toggle] = useAtom(ToggleAtom);

    return (
        <div>
            {toggle ? <LightMode/> : <DarkMode/>}
        </div>
    )
}
