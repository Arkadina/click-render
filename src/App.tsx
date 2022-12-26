import React, { useState, useEffect } from "react";
import "./App.css";
import Circle from "./Components/Circle";

export interface Coordinate {
    clientX: number;
    clientY: number;
}

function App() {
    const [circleCoordinate, setCircleCoordinate] = useState<Coordinate[]>([]);
    const [staticCircleCoordinate, setStaticCircleCoordinate] = useState<
        Coordinate[]
    >([]);

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        setCircleCoordinate([
            ...circleCoordinate,
            {
                clientX: e.clientX - 10,
                clientY: e.clientY - 60,
            },
        ]);

        setStaticCircleCoordinate([
            ...circleCoordinate,
            {
                clientX: e.clientX - 10,
                clientY: e.clientY - 60,
            },
        ]);
    }

    function handleBack() {
        const newCordinate = circleCoordinate.slice(
            0,
            circleCoordinate.length - 1
        );
        setCircleCoordinate([...newCordinate]);
    }

    function handleComeback() {
        const newCordinate = staticCircleCoordinate.slice(
            0,
            circleCoordinate.length + 1
        );

        setCircleCoordinate([...newCordinate]);
    }

    return (
        <div className="appContainer">
            <div className="btn-Container">
                <button onClick={(e) => handleBack()}>Voltar</button>
                <button onClick={(e) => handleComeback()}>
                    Ir para frente
                </button>
            </div>
            <div className="App" onClick={(e) => handleClick(e)}>
                <Circle circleCoordinate={circleCoordinate} />
            </div>
        </div>
    );
}

export default App;
