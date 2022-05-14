import { Box, Text } from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { UserIcon } from '../common/UserIcon';

// type: live, closeFriend, story, watchedStory
export const StoryItem = ({type, username, userIcon, onClick}) => {
    const [userIconSize, setUserIconSize] = useState(80)

    const onTouchDown = () => {
        setUserIconSize(70)
    }

    const onTouchUp = () => {
        setUserIconSize(80)
    }

    return <Pressable onTouchStart={onTouchDown} onTouchEnd={onTouchUp}>
    <Box>
        <UserIcon type={type} size={userIconSize}></UserIcon>
        <Text textAlign={"center"} mt={1}>{username}</Text>
    </Box>
    </Pressable>
}