import react from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { getInternalInstanceHandleFromPublicInstance } from "react-native/types_generated/Libraries/ReactPrivate/ReactNativePrivateInterface";

export default function Cesta (){
    <FlatList>
        data={itens.lista}
        renderItem={item}
        keyExtractor={({nome})=> nome}
            listHeaderComponent={()=> }
                return <>

                    </>

            }}
    </FlatList>
}

const estilos = StyleSheet.create({
    titulo:{
        color:"red",
        fontWeight:"bold",
        marginTop:32,
        marginBottom:8,
        fontSize:20,
        lineHeight:32,
    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    }
}) 