import { Box, Button, Container, Flex, Heading, Icon, Image, Stack, Text, VStack, SimpleGrid, useColorModeValue, FormControl, FormLabel, Input, Textarea, Link, Badge } from "@chakra-ui/react";
import { FaCheckCircle, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaQrcode } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("blue.700", "blue.800");
  const colorScheme = useColorModeValue("blue", "yellow");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg={bgColor} color="white" pt={10} pb={16} textAlign="center">
        <Heading mb={3}>Brother MFC-J4540DW</Heading>
        <Text fontSize="xl" mb={6}>
          Modernité et performance dans une imprimante tout-en-un
        </Text>
        <Image src="https://images.unsplash.com/photo-1605433246995-23f532d1e001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCcm90aGVyJTIwTUZDLUo0NTQwRFd8ZW58MHx8fHwxNzA4NTI3NDI0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Brother MFC-J4540DW" size="md" mx="auto" py={5} />
        <Stack direction="row" spacing={4} justify="center">
          <Button leftIcon={<FaCheckCircle />} colorScheme={colorScheme}>
            Achetez maintenant
          </Button>
          <Button variant="outline">En savoir plus</Button>
        </Stack>
      </Box>

      <VStack spacing={10} py={10}>
        <Heading size="lg" fontWeight="normal" color={textColor}>
          Caractéristiques Principales
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<FaStar />} title="Haute Qualité d'Impression" text="Imprimez vos documents avec une précision incroyable et des couleurs éclatantes." />
          <Feature icon={<FaStar />} title="Connectivité Exceptionnelle" text="Connectez-vous via Wi-Fi, NFC, et plus encore pour une impression sans effort." />
          <Feature icon={<FaStar />} title="Économie d'Encre" text="Des cartouches d'encre de grande capacité réduisent les coûts d'impression." />
        </SimpleGrid>
      </VStack>

      <Box as="section" bg={useColorModeValue("gray.50", "gray.900")} py={10}>
        <VStack spacing={5}>
          <Heading size="lg" fontWeight="normal" color={textColor}>
            Témoignages Clients
          </Heading>
          <Testimonial quote="Cette imprimante a révolutionné notre manière de travailler au bureau. La qualité d'impression et la facilité d'utilisation sont incomparables." author="Jean Dupont" role="Directeur général" />
          <Testimonial quote="Le service client de Brother est exceptionnel, et cette imprimante est la meilleure que j'ai jamais utilisée." author="Marie Curie" role="Responsable IT" />
        </VStack>
      </Box>

      <Flex bg={useColorModeValue("white", "gray.800")} p={10} justify="space-around" wrap="wrap">
        <Box flex="1" minW="300px">
          <Heading mb={5} size="lg" fontWeight="normal" color={textColor}>
            Contactez-Nous
          </Heading>
          <Flex align="center" mb={3}>
            <Icon as={FaMapMarkerAlt} color={colorScheme} mr={2} />
            <Text fontSize="sm">123 Avenue de la République, Paris</Text>
          </Flex>
          <Flex align="center" mb={3}>
            <Icon as={FaPhone} color={colorScheme} mr={2} />
            <Link fontSize="sm" href="tel:+33123456789">
              +33 1 23 45 67 89
            </Link>
          </Flex>
          <Flex align="center" mb={3}>
            <Icon as={FaEnvelope} color={colorScheme} mr={2} />
            <Link fontSize="sm" href="mailto:support@brother.fr">
              support@brother.fr
            </Link>
          </Flex>
          <Flex align="center">
            <Icon as={FaQrcode} color={colorScheme} mr={2} />
            <Text fontSize="sm">Scannez pour visiter notre site</Text>
          </Flex>
        </Box>

        <Box flex="1" minW="300px" mt={{ base: 10, md: 0 }}>
          <Heading mb={5} size="lg" fontWeight="normal" color={textColor}>
            Laissez un Message
          </Heading>
          <form>
            <FormControl id="name" mb={3}>
              <FormLabel>Nom</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mb={3}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" mb={3}>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme={colorScheme} type="submit">
              Envoyer
            </Button>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

const Feature = ({ icon, title, text }) => (
  <VStack>
    <Icon as={icon} w={10} h={10} color={useColorModeValue("blue.500", "yellow.500")} />
    <Text fontWeight="bold">{title}</Text>
    <Text color="gray.500">{text}</Text>
  </VStack>
);

const Testimonial = ({ quote, author, role }) => (
  <Box textAlign="center" px={8}>
    <Text fontStyle="italic">"{quote}"</Text>
    <Text fontWeight="bold" mt={4}>
      {author}
    </Text>
    <Badge colorScheme="blue" mt={1}>
      {role}
    </Badge>
  </Box>
);

export default Index;
