import { useEffect, useState } from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
type Grandma = {
    name: string,
    url: string,
    cost: string
}
export const grandmaIcons= new Map<string, Grandma>(
    [
        ["1", {
            name: "Grandma",
            url: "https://cdn.shopify.com/s/files/1/0031/4232/0246/products/not-grandma-tshirt_800x.jpg?v=1593776240",
            cost: "35"
            }
        ],
        ["2", {
            name: "Fit Grandma",
            url: "https://previews.123rf.com/images/ufabizphoto/ufabizphoto1905/ufabizphoto190500988/123994488-vital-senior-grandma-dressed-in-stylish-sports-suit-exercising-in-the-gym-with-dumbbells-against-vio.jpg",
            cost: "70"
            }
        ],
        ["3", {
            name: "Buff Grandma",
            url: "https://s.abcnews.com/images/GMA/gma-fitness-health-weight-loss-03-ht-llr-220213_1644790049673_hpMain_4x3_608.jpg",
            cost: "105"
            }
        ]
    ]
        
);

export function Grandma(){

    const [grandmaLevelToUpload, setGrandmaLevelToUpload] = useState(1);
    const [grandmaLevelToDownload, setGrandmaLevelToDownload] = useState(1);

    useEffect( () => {
        
        async () => {
            
            
            await AsyncStorage.setItem('grandma', grandmaLevelToUpload.toString());
          }
        console.log(AsyncStorage.getAllKeys())
     },[])

    async function handleClick(){
        let cookies = await AsyncStorage.getItem('cookies');
        
        if (grandmaLevelToUpload < 4 && (Number(cookies) - (Number(grandmaIcons.get(grandmaLevelToUpload.toString())?.cost)) >= 0)){
            console.log("hello")
            await AsyncStorage.setItem('cookies', (Number(cookies) - (Number(grandmaIcons.get(grandmaLevelToUpload.toString())?.cost))).toString())
            
            
            //console.log(arrowLevelToUpload)
            setGrandmaLevelToUpload(grandmaLevelToUpload + 1)
            //console.log(arrowLevelToUpload)
            
            await AsyncStorage.setItem('grandma', grandmaLevelToUpload.toString());
            let grandma = await AsyncStorage.getItem('grandma');
            //console.log(arrowLevel)
            setGrandmaLevelToDownload(Number(grandma))
            //console.log(arrowLevelToDownload)
        }
    }
    //console.log(arrowIcons.get(arrowLevelToDownload.toString())?.name)
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: grandmaIcons.get(grandmaLevelToDownload.toString())?.url}}></Image>
            <Text>{(grandmaIcons.get(grandmaLevelToDownload.toString())?.name !== undefined) && grandmaIcons.get(grandmaLevelToDownload.toString())?.name}</Text>
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
        width: 100,
        height: 100,
        
    }

  });