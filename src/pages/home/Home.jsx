import { Box, Container, Flex } from '@chakra-ui/react'
import FeedPosts from '../../components/Feedposts/FeedPosts'

const Home = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Flex gap={20}>
          <Box flex={2} py={10}>
            <FeedPosts/>
          </Box>
          <Box flex={3} mr={20} display={{base: "none", lg: "block"}}>
            SuggestUsers
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Home