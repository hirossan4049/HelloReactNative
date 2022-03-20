import React from 'react';
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export const AppBar = () => {
    return <>
        <StatusBar bg="#ffffff" barStyle="dark-content" />
        <Box safeAreaTop bg="#fff" />
        <HStack p="2" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
            <HStack alignItems={"center"}>
            <Text fontSize={"36px"} fontWeight={"bold"}>Instagram</Text>
            </HStack>
            <HStack w={"100px"}>
                <IconButton p={2} w={"48px"} icon={<Ionicons name="ios-add-circle-outline" size={30} color="black" />} />
                <IconButton p={2} w={"48px"} icon={<Ionicons name="ios-heart-outline" size={30} color="black" />} />
                <IconButton p={2} w={"48px"} icon={<Ionicons name="ios-send-outline" size={28} color="black" />} />
            </HStack>
        </HStack>

      </>;
  }