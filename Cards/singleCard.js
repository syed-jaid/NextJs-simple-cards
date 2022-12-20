import { Card, CardHeader, Box, Flex, CardBody, Spacer, Image, Text, CardFooter, Button } from '@chakra-ui/react'

export default function singleCard(props) {
    const { type, img, id, ownerName, like, hightBid, price, discount } = props?.singleProduct
    return (
        <Card w='320px' mx='auto' mt='10' bg='#0b2237' h='500px'>
            <CardHeader>
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
            <CardBody>
                <Flex>
                    <Box>
                        <Text fontSize='17px' color='white'>{id}</Text>
                        <Text>{ownerName}</Text>
                    </Box>
                    <Box>
                        <Text>{ }</Text>
                        <Text>{like}</Text>
                    </Box>
                </Flex>
                <Flex>
                    <Box>
                        <Text>HIGHEST BID</Text>
                        <Text>{hightBid}</Text>
                    </Box>
                    <Box>
                        <Text>AUCTION ENDS IN</Text>
                        <Text>03 : 34 : 24 : 42S</Text>
                    </Box>
                </Flex>
            </CardBody>
            <CardFooter>
                <Button>BID NOW</Button>
            </CardFooter>
        </Card>
    )
}
