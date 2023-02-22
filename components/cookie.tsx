import { useEffect, useState } from "react";
import { TouchableHighlight, View, Image, 
    StyleSheet, Text,  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export function Cookie(){
    const [cookiesToUpload, setCookiesToUpload] = useState(1);
    const [cookiesToDownload, setCookiesToDownload] = useState(0);
    useEffect( () => {
        async () => {
            await AsyncStorage.setItem('cookies', cookiesToUpload.toString());
          }
        
     },[])
    async function handleClick(){
        setCookiesToUpload(cookiesToUpload + 1);
        await AsyncStorage.setItem('cookies', cookiesToUpload.toString());
        let cookies = await AsyncStorage.getItem('cookies');
        setCookiesToDownload(Number(cookies));
    }

    return(
        <View style={styles.container}>
            <Text>CLICK</Text>
            <TouchableHighlight onPress={handleClick}>
                <Image style={styles.image} source={{uri:"https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg"}}/>
            </TouchableHighlight>
            <Text>{cookiesToDownload}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 500,
      height: 500,
      borderRadius: 1000 / 2
    },
    image:{
        width: 500,
        height: 500,
        borderRadius: 1000 / 2
    }

  });
  