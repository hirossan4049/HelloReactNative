import React from 'react';
import { Avatar, Box } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

// type: live, closeFriend, story, watchedStory
export const UserIcon = ({type, userIcon, size = 80, borderWidth = 5}) => {
    return <Box size={`${size}px`}>
        {(() => {
            if (type == "story") {
                return <LinearGradient colors={['#e1306c', '#f77737', '#ffdc80']} style={{height: size, width: size,borderRadius: size / 2, position: "absolute"}} />
            } else if (type == "closeFriend") {
                return <Box bg={"green.400"} size={`${size}px`} rounded={"full"} position={"absolute"} ></Box>
            } else if (type == "watchedStory") {
                return <Box bg={"#999"} size={`${size}px`} rounded={"full"} position={"absolute"} ></Box>
            }
        })()}
        <Box top={`${borderWidth / 2}px`} left={`${borderWidth / 2}px`} bg={"white"} size={`${size - borderWidth}px`} rounded={"full"} position={"absolute"} ></Box>
        <Avatar top={`${borderWidth}px`} left={`${borderWidth}px`} position={"absolute"} size={`${size - (borderWidth * 2)}px`} bg="amber.500" source={{
            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }}>DJ</Avatar>
    </Box>
}