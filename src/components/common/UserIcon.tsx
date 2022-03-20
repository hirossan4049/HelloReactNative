import React from 'react';
import { Avatar, Box } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export const UserIcon = ({type, userIcon}) => {
        return <Box size={"80px"}>
        {(() => {
            if (type == "story") {
                return <LinearGradient colors={['#e1306c', '#f77737', '#ffdc80']} style={{height: 80, width: 80,borderRadius: 40, position: "absolute"}} />
            } else if (type == "closeFriend") {
                return <Box bg={"green.400"} size={"80px"} rounded={"full"} position={"absolute"} ></Box>
            }
        })()}
            <Box top={"2.5px"} left={"2.5px"} bg={"white"} size={"75px"} rounded={"full"} position={"absolute"} ></Box>
            <Avatar top={"5px"} left={"5px"} position={"absolute"} size={"70px"} bg="amber.500" source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }}>DJ</Avatar>

        </Box>

}