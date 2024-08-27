import { Flex, rem } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

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
        <a
          href="https://www.linkedin.com/in/jmlagumbay/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <IconBrandLinkedin
            style={{ width: rem(30), height: rem(30) }}
            stroke={1.5}
            color="lime"
          />
        </a>

        <a
          href="https://www.facebook.com/jmlagumbay"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <IconBrandFacebook
            style={{ width: rem(30), height: rem(30) }}
            stroke={1.5}
            color="lime"
          />
        </a>

        <a
          href="https://www.instagram.com/mikelagumbay/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <IconBrandInstagram
            style={{ width: rem(30), height: rem(30) }}
            stroke={1.5}
            color="lime"
          />
        </a>

        <a
          href="https://github.com/mikelagumbay22"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <IconBrandGithub
            style={{ width: rem(30), height: rem(30) }}
            stroke={1.5}
            color="lime"
          />
        </a>

        <a
          href="mailto:mikelagumbay@hotmail.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <IconMail
            style={{ width: rem(30), height: rem(30) }}
            stroke={1.5}
            color="lime"
          />
        </a>
      </Flex>
    </>
  );
}

export default SocialMedia;
