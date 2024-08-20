import { Text, Flex, Group, rem } from "@mantine/core";
import { IconBrandHtml5, IconBrandCss3, IconBrandReact, IconBrandJavascript, IconBrandNodejs, IconBrandMongodb } from "@tabler/icons-react";
import { SiExpress, SiMongoose } from "react-icons/si";

function Stacks() {
  return (
    <>
      <Text>Tech stacks and tools</Text>
      <Flex
        mih={50}
        gap="md"
        justify="Center"
        align="Center"
        direction="row"
        wrap="wrap"
      >
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <IconBrandHtml5
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>HTML</Text>
          </Flex>
        </Group>
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <IconBrandCss3
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>CSS</Text>
          </Flex>
        </Group>
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <IconBrandReact
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>React</Text>
          </Flex>
        </Group>
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <IconBrandJavascript
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>Javascript</Text>
          </Flex>
        </Group>
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <IconBrandNodejs
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>Node.js</Text>
          </Flex>
        </Group>
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <SiExpress
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>Express</Text>
          </Flex>
        </Group>
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <SiMongoose
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>Mongoose</Text>
          </Flex>
        </Group>
        <Group>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <IconBrandMongodb
              style={{ width: rem(45), height: rem(45) }}
              stroke={1.5}
              color="var(--mantine-color-lime-filled)"
            />
            <Text>MongoDB</Text>
          </Flex>
        </Group>
      </Flex>
    </>
  );
}

export default Stacks;
