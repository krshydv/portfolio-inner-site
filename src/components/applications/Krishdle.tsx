import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface KrishdleAppProps extends WindowAppProps {}

const KrishdleApp: React.FC<KrishdleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Krishdle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 Krish Yadav'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default KrishdleApp;
