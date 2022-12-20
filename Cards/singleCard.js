import { Card, CardHeader, Box, Flex, CardBody, Spacer, Image, Text, CardFooter, Button, Badge } from '@chakra-ui/react'
import { useState } from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';


export default function singleCard(props) {
    const { type, img, id, ownerName, like, hightBid, price, discount } = props?.singleProduct
    let discountprice = (price / 100) * discount
    const [liked, setliked] = useState(false)


    return (
        <Card w='305px' mx='auto' mt='10' bg='#0b2237' h='545px'>
            <CardHeader pb='14px'>
                <Flex>
                    <Box fontSize='14px' bg='#141a30' color='#9299a3' px='2' borderRadius='12px' border='1px'>
                        Hot Deal
                    </Box>
                    <Spacer />
                    {type === 'auction' ? <Box fontSize='13px' fontWeight='bold' bg='#141a30' color='white' py='1px' px='8px' borderRadius='12px' border='2px' borderColor='#874d0e'>
                        AUCTION
                    </Box> : <Box fontSize='13px' fontWeight='bold' bg='#141a30' color='white' py='1px' px='10px' borderRadius='12px' border='2px' borderColor='#522eb4'>
                        SALE
                    </Box>}
                </Flex>
            </CardHeader>
            <CardBody py='0'>
                <Image
                    src={img}
                    borderRadius='10px'
                    mb='10px'
                />
                <Flex>
                    <Box>
                        <Text fontSize='17px' color='white' fontWeight='semibold'> {id}</Text>
                        <Text fontSize='15px' color='#3f7bb6' fontWeight='semibold'>{ownerName}</Text>
                    </Box>
                    <Spacer />
                    {liked ? <Flex alignItems='center'>
                        <BsSuitHeartFill color='#ff007f' fontSize='20px' onClick={() => { setliked(false) }} />
                        <Text color='white' ml='9px' mb='4px'>{like + 1}</Text>
                    </Flex> : <Flex alignItems='center'>
                        <BsSuitHeartFill color='#474763' fontSize='20px' onClick={() => { setliked(true) }} />
                        <Text color='#84888c' ml='9px' mb='4px'>{like}</Text>
                    </Flex>
                    }
                </Flex>
                {type === 'auction' ? <Flex mt='5'>
                    <Box border='1px' borderColor='#3e7ab5' p='6px' w='40%'>
                        <Text color='#00a804' fontSize='14px' fontWeight='bold'>HIGHEST BID</Text>
                        <Text color='white' fontWeight='semibold'>${hightBid}</Text>
                    </Box>
                    <Spacer />
                    <Box border='1px' borderColor='#6d451c' p='6px' w='56%'>
                        <Text color='#698eb1' fontWeight='bold' fontSize='14px'>AUCTION ENDS IN</Text>
                        <Text color='white' fontWeight='semibold'>03 : 34 : 24 : 42S</Text>
                    </Box>
                </Flex> :
                    <Flex mt='5'>
                        <Box border='1px' borderColor='#3e7ab5' px='8px' py='6px' w='38%' position='relative'>
                            <Badge fontSize='12px' color='white' bg='#00b306' px='2' borderRadius="10px" position='absolute' right='4px' top='-11px' >
                                {discount}% OFF
                            </Badge>
                            <Text color='red' fontSize='14.4px' fontWeight='bold' textDecoration='line-through' textDecorationColor='#f58337'>{price}</Text>
                            <Text color='white' fontWeight='semibold'>${price - discountprice}</Text>
                        </Box>
                        <Spacer />
                        <Box border='1px' borderColor='#6d451c' p='6px'>
                            <Text color='#698eb1' fontWeight='bold' fontSize='14px'>FLASH DEAL ENDS IN</Text>
                            <Text color='white' fontWeight='semibold' fontSize='18px'>03 : 34 : 24 : 42S</Text>
                        </Box>
                    </Flex>}
            </CardBody>
            <CardFooter pt='0'>
                {type === 'auction' ? <Button bg='#0075fe' color='white' borderRadius='none' fontSize='14px' fontWeight='bold' colorScheme='black' w='100%' py='24px'>BID NOW</Button>
                    : <>
                        <Button bg='#0075fe' color='white' borderRadius='none' fontSize='14px' fontWeight='bold' colorScheme='black' w='48%' py='24px'>BID NOW</Button>
                        <Spacer />
                        <Button bg='' border='1px' color='white' borderRadius='none' colorScheme='black' fontSize='14px' fontWeight='bold' w='49%' py='22px'>ADD TO CARD </Button>
                    </>
                }
            </CardFooter>
        </Card>
    )
}
