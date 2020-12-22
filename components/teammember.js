import Head from "next/head";
import styles from "../styles/About.module.css";
import { Container, Row, Col } from "react-grid-system";
import {
  Button,
  Image,
  Card,
  Link,
  Divider,
  Spacer,
  Display,
  Collapse,
  Text,
  Grid,
  useMediaQuery,
  Badge,
  Row as GeistRow,
} from "@geist-ui/react";

export default ({ name, image, role }) => (
  <Grid xs={12} md={6}>
    <Display
      shadow
      style={{
        objectFit: "cover",
        float: "right",
        margin: "30px 0px 0px 0px",
        marginLeft: "30px",
      }}
      caption={<><b>{name}</b><br />{role}</>}
    >
      <Image
        width={446}
        height={446}
        style={{ objectFit: "cover", filter: name=="Advait Atreya" ? "brightness(1.7)" : null }}
        src={image}
      />
    </Display>
    
  </Grid>
);
