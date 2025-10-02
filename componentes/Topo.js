import react from "react";
import { Image,StyleSheet,Dimensions } from "react-native";

import Texto from "./Texto";

export default function Topo({titulo}){
    return <>
    <texto Style={estilos.titulo}>   {titulo}   </texto>
            </>
}

const estilos = StyleSheet.create({

        topo:{
            width: "100%",
            height: 578 / 786 * width,
        }
});