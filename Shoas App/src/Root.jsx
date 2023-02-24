import React from "react";
import { Outlet } from "react-router-dom"
import { NavBar } from "./Nav";

export function RootLayout(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}