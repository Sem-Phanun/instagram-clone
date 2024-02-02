import { Flex, Image, Text } from "@chakra-ui/react"
//import { } from ''
import { auth, firestore} from '../../firebase/firebase'
//import {} from ""
//import {} from ""
import { doc, getDoc, setDoc } from "firebase/firestore"
const GoogleAuth = ({prefix}) => {
  

  const handleGoogleAuth = async () => {
    
  }

  return (
    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} onClick={handleGoogleAuth}>
      <Image src="/google.png" w={5}/>
      <Text mx={2} color={"blue.500"}>
        {prefix} with Google
      </Text>
    </Flex>
  )
}

export default GoogleAuth