import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './Projects.module.css';

const mockdata = [
  {
    title: 'BUDDIE.PH',
    description:
      'Welcome to Buddieph – Your trusted partner in pet care. With our easy-to-use platform, you can effortlessly manage your pets health records, connect with top veterinarians, and ensure they get the best care possible—all in one place.',
    icon: IconGauge,
  },
  {
    title: 'PARKRIDGE',
    description:
      'Parkridge App is a comprehensive community management tool designed to keep residents connected and informed. With features like announcements, facility requests, issue reporting, and construction monitoring, managing your community has never been easier.',
    icon: IconUser,
  },
  {
    title: 'GAMERS.PH',
    description:
      'GamersPH is your ultimate gaming hub, offering a vast collection of games across all platforms—from console and PC to mobile. Discover the latest releases, explore classic titles, and stay updated with game reviews, news, and trailers. Whether youre a casual player or a hardcore gamer, GamersPH has everything you need to elevate your gaming experience.',
    icon: IconCookie,
  },
];

function Projects() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
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

      {/* <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text> */}

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default Projects;
