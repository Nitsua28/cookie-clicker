import { useEffect, useState } from "react";
import { View, Image, Button, Text, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
type Cursor = {
    name: string,
    url: string,
    cost: string
}
export const arrowIcons= new Map<string, Cursor>(
    [
        ["1", {
            name: "Regular Cursor",
            url: "https://img.freepik.com/premium-vector/arrow-pointer-mouse-cursor-black-outline-icon_543062-140.jpg?w=360",
            cost: "10"
            }
        ],
        ["2", {
            name: "Upgraded Cursor",
            url: "https://cdn-icons-png.flaticon.com/512/5993/5993123.png",
            cost: "20"
            }
        ],
        ["3", {
            name: "Fire Cursor",
            url: "https://www.cursor.cc/cursor3d/53638.png",
            cost: "30"
            }
        ]
    ]
        
);

export function ArrowUpgrade(){

    const [arrowLevelToUpload, setArrowLevelToUpload] = useState(1);
    const [arrowLevelToDownload, setArrowLevelToDownload] = useState(1);

    useEffect( () => {
        let arrowLevel: string | null = "";
        async () => {
            await AsyncStorage.removeItem("arrowLevel");
            
            //await AsyncStorage.setItem('arrowLevel', arrowLevelToUpload.toString());
          }
        console.log(AsyncStorage.getAllKeys())
     },[])

    async function handleClick(){
        let cookies = await AsyncStorage.getItem('cookies');
        // console.log(cookies)
        // console.log(Number(arrowIcons.get(arrowLevelToUpload.toString())?.cost))
        if (arrowLevelToUpload < 4 && (Number(cookies) - (Number(arrowIcons.get(arrowLevelToUpload.toString())?.cost)) >= 0)){

            await AsyncStorage.setItem('cookies', (Number(cookies) - (Number(arrowIcons.get(arrowLevelToUpload.toString())?.cost))).toString())
            let cookies1 = await AsyncStorage.getItem('cookies');
            console.log(cookies1)
            //console.log(arrowLevelToUpload)
            setArrowLevelToUpload(arrowLevelToUpload + 1)
            //console.log(arrowLevelToUpload)
            
            await AsyncStorage.setItem('arrowLevel', arrowLevelToUpload.toString());
            let arrowLevel = await AsyncStorage.getItem('arrowLevel');
            //console.log(arrowLevel)
            setArrowLevelToDownload(Number(arrowLevel))
            //console.log(arrowLevelToDownload)
            Alert.alert("upgraded");
        }
    }
    //console.log(arrowIcons.get(arrowLevelToDownload.toString())?.name)
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: arrowIcons.get(arrowLevelToDownload.toString())?.url}}></Image>
            <Text>{(arrowIcons.get(arrowLevelToDownload.toString())?.name !== undefined) && arrowIcons.get(arrowLevelToDownload.toString())?.name}</Text>
            <Button title="Upgrade" onPress={() => handleClick()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    image:{
        width: 30,
        height: 30,
        
    }

  });