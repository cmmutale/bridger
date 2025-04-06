import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import React from "react";
import PuckConfig from "./puck.config";


// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data: any) => { };

// Render Puck editor
export function Editor() {
    return <Puck config={PuckConfig} data={initialData} onPublish={save} />;
}
