import { Box } from "@chakra-ui/core";

const Footer = (props) => {
  return (
  <div>
    <Box bg="teal.500"
      p={3}
      color="white"
      textAlign='center'
      w='100%'
      bottom='0'
      position='fixed' >
      Bodnár Kristóf &copy; {new Date().toLocaleDateString('en-CA')}
    </Box>
    <style jsx>{`
        .footer {
          padding-top: 60px;
          text-align: center;
          width: 100%;
          position: fixed;
          bottom: 0;
          left: 0;
          margin-top: 20px;
        }
    ` }</style>
    </div>
  )
}

export default Footer;