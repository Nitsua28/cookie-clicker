import { useEffect, useState } from "react";
import { TouchableHighlight, View, Image, 
    StyleSheet, Text,  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export function Cookie(){
    const [cookiesToUpload, setCookiesToUpload] = useState(1);
    const [cookiesToDownload, setCookiesToDownload] = useState(0);
    
    useEffect( () => {
        
        async () => {
            await AsyncStorage.clear();
           
            //arrowLevel = await AsyncStorage.getItem('arrowLevel');
            
          }
          
        
     },[])
     setInterval(async() => {
        let grandmaLevel: string | null = "";
        grandmaLevel = await AsyncStorage.getItem('grandma');
        switch(grandmaLevel as string){

            case "2":{
                setCookiesToDownload(cookiesToUpload + 3);
               
                break
            }
            case "3":{
                setCookiesToDownload(cookiesToUpload + 10);
                
                break
            }
            default:{
                break
            }
        
      }}, 1000);

    async function handleClick(){
        // console.log(cookiesToUpload);
        const arrowLevel = await AsyncStorage.getItem('arrowLevel');
        console.log(arrowLevel)
        switch(arrowLevel as string){
            case "1":{

                setCookiesToUpload(cookiesToUpload + 1);
                break
            }
            case "2":{
                setCookiesToUpload(cookiesToUpload + 5);
                break
            }
            case "3":{
                setCookiesToUpload(cookiesToUpload + 15);
                break
            }
            default:{
                break
            }
        }
        
        //console.log(cookiesToUpload);
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
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      height: 500,
      
    },
    image:{
        width: 300,
        height: 300,
        borderRadius: 1000 / 2
    }

  });
  