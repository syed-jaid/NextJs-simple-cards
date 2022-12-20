import { useEffect, useState } from "react"
import { Box, Flex } from '@chakra-ui/react'
import SingleCard from "../Cards/singleCard"


export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('card.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <Box bg='#0c1421' minH={'1000px'}>
      <Flex wrap='wrap' gap='10px' maxW='1050px' mx={'auto'}>
        {
          products.map(singleProduct => <SingleCard singleProduct={singleProduct}></SingleCard>)
        }
      </Flex>
    </Box>
  )
}
