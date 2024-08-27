import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { IconDog, IconBackhoe, IconDeviceGamepad } from '@tabler/icons-react';

const mockdata = [
  {
    title: 'BUDDIE.PH',
    link: 'https://buddie.ph/',
    description:
      'Welcome to Buddieph – Your trusted partner in pet care. With our easy-to-use platform, you can effortlessly manage your pets health records, connect with top veterinarians, and ensure they get the best care possible—all in one place.',
    icon: IconDog,
  },
  {
    title: 'PARKRIDGE',
    link: 'https://parkridge.netlify.app/',
    description:
      'Parkridge App is a comprehensive community management tool designed to keep residents connected and informed. With features like announcements, facility requests, issue reporting, and construction monitoring, managing your community has never been easier.',
    icon: IconBackhoe,
  },
  {
    title: 'GAMERS.PH',
    link: 'https://gamersph.netlify.app/',
    description:
      'GamersPH is your ultimate gaming hub, offering a vast collection of games across all platforms—from console and PC to mobile. Discover the latest releases, explore classic titles, and stay updated with game reviews, news, and trailers. Whether you’re a casual player or a hardcore gamer, GamersPH has everything you need to elevate your gaming experience.',
    icon: IconDeviceGamepad,
  }
];

function Projects() {
  
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="lg" padding="xl">
      <feature.icon
        style={{
          width: rem(60),
          height: rem(60),
          backgroundColor: 'lime',
          borderRadius: rem(10), // Half of the width/height for a circular effect
        }}
        stroke={2}
        color="black"
      />
      <Text fz="lg" fw={500} mt="md">
        <a
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black', fontSize: '2rem', textDecoration: 'underline' }}
        >
          {feature.title}
        </a>
      </Text>
      <Text fz="sm" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mt="sm">
        Projects
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default Projects;
