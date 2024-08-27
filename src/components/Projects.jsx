import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { IconDog, IconBackhoe, IconDeviceGamepad } from '@tabler/icons-react';
import classes from './Projects.module.css';

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
  },
  {
    title: 'GAMERS.PH',
    link: 'https://gamersph.netlify.app/',
    description:
      'GamersPH is your ultimate gaming hub, offering a vast collection of games across all platforms—from console and PC to mobile. Discover the latest releases, explore classic titles, and stay updated with game reviews, news, and trailers. Whether you’re a casual player or a hardcore gamer, GamersPH has everything you need to elevate your gaming experience.',
    icon: IconDeviceGamepad,
  },
  {
    title: 'GAMERS.PH',
    link: 'https://gamersph.netlify.app/',
    description:
      'GamersPH is your ultimate gaming hub, offering a vast collection of games across all platforms—from console and PC to mobile. Discover the latest releases, explore classic titles, and stay updated with game reviews, news, and trailers. Whether you’re a casual player or a hardcore gamer, GamersPH has everything you need to elevate your gaming experience.',
    icon: IconDeviceGamepad,
  },
  {
    title: 'GAMERS.PH',
    link: 'https://gamersph.netlify.app/',
    description:
      'GamersPH is your ultimate gaming hub, offering a vast collection of games across all platforms—from console and PC to mobile. Discover the latest releases, explore classic titles, and stay updated with game reviews, news, and trailers. Whether you’re a casual player or a hardcore gamer, GamersPH has everything you need to elevate your gaming experience.',
    icon: IconDeviceGamepad,
  },
];

function Projects() {
  
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color='lime'
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        <a
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black', textDecoration: 'none' }}
        >
          {feature.title}
        </a>
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Projects
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default Projects;
