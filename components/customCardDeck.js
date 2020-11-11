import React from 'react';
import { Box, Image, Badge, Grid } from "@chakra-ui/core";
import Link from 'next/link';

const CustomCardDeck = (props) => {
  const { blogs } = props

  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} paddingLeft='12px' paddingRight='12px'>
        {blogs.map((blog) => (
          <div key={blog.id} className="box-item">
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              width={[
                "100%", // base
              ]} >
              <Link href={`/blog/${blog.slug}`}>
                <div className="hover-pointer" >
                  <Image src={blog.image} alt="No image found..." />
                </div>
              </Link>
                <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Badge rounded="full" px="2" variantColor="teal">
                    {blog.tag}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2" >
                    {blog.date}
                  </Box>
                </Box>

                <Link href={`/blog/${blog.slug}`}>
                  <div className="hover-pointer" >
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated >
                      {blog.title}
                    </Box>
                  </div>
                </Link>

                <Box>
                  {blog.firstWords && blog.firstWords.substr(0, 100) + "..."}
                </Box>
                </Box>
            </Box>
          </div>
        ))}
      </Grid>
      <style jsx>{`
        .hover-pointer {
          cursor: pointer
        }
      `}</style>
    </div>
  )
}

export default CustomCardDeck;