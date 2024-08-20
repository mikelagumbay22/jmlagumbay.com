import { Flex, rem  } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

function SocialMedia() {
  return (  
    <>    
      <Flex
      mih={50}
      gap="lg"
      justify="center"
      align="left"
      direction="row"
      wrap="wrap"
    >
      <IconBrandLinkedin
      style={{ width: rem(25), height: rem(25) }}
      stroke={1.5}
      color="var(--mantine-color-lime-filled)"
    />
    <IconBrandFacebook
      style={{ width: rem(25), height: rem(25) }}
      stroke={1.5}
      color="var(--mantine-color-lime-filled)"
    />
    <IconBrandInstagram
      style={{ width: rem(25), height: rem(25) }}
      stroke={1.5}
      color="var(--mantine-color-lime-filled)"
    />
        <IconBrandGithub
      style={{ width: rem(25), height: rem(25) }}
      stroke={1.5}
      color="var(--mantine-color-lime-filled)"
    />
    <IconMail
      style={{ width: rem(25), height: rem(25) }}
      stroke={1.5}
      color="var(--mantine-color-lime-filled)"
    />
    </Flex>
    
    </>
  );
}

export default SocialMedia;