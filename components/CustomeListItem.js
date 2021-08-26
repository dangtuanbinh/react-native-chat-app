import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem,Avatar  } from 'react-native-elements'

const CustomeListItem = ({id, chatName,enterChat}) => {
    
    return (
        <ListItem onPress={() => enterChat(id,chatName)} key={id} bottomDivider>
            <Avatar 
            rounded
            source = {{
                uri: "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
            }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"800"}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test Subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomeListItem

const styles = StyleSheet.create({})
