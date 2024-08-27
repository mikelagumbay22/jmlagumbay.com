import { Text, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { SiExpress, SiMongoose } from "react-icons/si";
import styles from "./Stacks.module.css";

function Stacks() {
  // Use media query to determine screen size
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Adjust icon size based on screen size
  const iconSize = isMobile ? rem(100) : rem(45);

  return (
    <>
      <Text align="center" size="xl" mb="md">
        Tech stacks and tools
      </Text>

      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <IconBrandHtml5
            style={{ width: iconSize, height: iconSize }}
            stroke={1.5}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>HTML</Text>
        </div>
        <div className={styles.gridItem}>
          <IconBrandCss3
            style={{ width: iconSize, height: iconSize }}
            stroke={1.5}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>CSS</Text>
        </div>
        <div className={styles.gridItem}>
          <IconBrandReact
            style={{ width: iconSize, height: iconSize }}
            stroke={1.5}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>React</Text>
        </div>
        <div className={styles.gridItem}>
          <IconBrandJavascript
            style={{ width: iconSize, height: iconSize }}
            stroke={1.5}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>Javascript</Text>
        </div>
        <div className={styles.gridItem}>
          <IconBrandNodejs
            style={{ width: iconSize, height: iconSize }}
            stroke={1.5}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>Node.js</Text>
        </div>
        <div className={styles.gridItem}>
          <SiExpress
            style={{ width: iconSize, height: iconSize }}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>Express</Text>
        </div>
        <div className={styles.gridItem}>
          <SiMongoose
            style={{ width: iconSize, height: iconSize }}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>Mongoose</Text>
        </div>
        <div className={styles.gridItem}>
          <IconBrandMongodb
            style={{ width: iconSize, height: iconSize }}
            stroke={1.5}
            color="var(--mantine-color-lime-filled)"
          />
          <Text>MongoDB</Text>
        </div>
      </div>
    </>
  );
}

export default Stacks;
