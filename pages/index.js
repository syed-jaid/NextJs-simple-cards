import { useEffect, useState } from "react"
import { Flex } from '@chakra-ui/react'
import SingleCard from "../Cards/singleCard"

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('card.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <Flex wrap='wrap' gap='10px' bg='#061321' h='100vh'>
        {
          products.map(singleProduct => <SingleCard singleProduct={singleProduct}></SingleCard>)
        }
      </Flex>
    </>
  )
}
