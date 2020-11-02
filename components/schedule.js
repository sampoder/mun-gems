import Head from "next/head";
import styles from "../styles/About.module.css";
import { Container, Row, Col } from "react-grid-system";
import {
  Button,
  Image,
  Card,
  Link,
  Code,
  Divider,
  Spacer,
  Display,
  Collapse,
  Text,
  Table,
  Grid,
  useMediaQuery,
  Badge,
  Row as GeistRow,
} from "@geist-ui/react";

export default () => {
  const firstDay = [
    { time: <Text b>10:00 to 10:15</Text>, description: "Opening ceremony" },
    { time: <Text b>10:15 to 10:45</Text>, description: "Introduction in committee sessions" },
    { time: <Text b>10:45 to 12:45</Text>, description: "Committee session 1" },
    { time: <Text b>12:45 to 13:30</Text>, description: "Lunch break" },
    { time: <Text b>13:30 to 15:00</Text>, description: "Committee session 2" },
  ]

  const secondDay = [
    { time: <Text b>10:50 to 11:00</Text>, description: "Arrival of delegates " },
    { time: <Text b>11:00 to 13:30</Text>, description: "Committee session 3" },
    { time: <Text b>13:30 to 14:15</Text>, description: "Lunch break" },
    { time: <Text b>14:15 to 14:45</Text>, description: "Committee session 4" },
    { time: <Text b>14:45 to 15:00</Text>, description: "Closing remarks" },
  ]
  
  const blankData = [
  ]
  return (
    <>
    <Table data={blankData}>
        <Table.Column prop="time" label="Saturday 28th March" />
      </Table>
      <Table data={firstDay} className="mainTable">
        <Table.Column prop="time" label="Saturday 28th March" width={140} />
        <Table.Column prop="description" label=" " />
      </Table>
      <Spacer y={1} />
      <Table data={blankData}>
        <Table.Column prop="time" label="Sunday 29th March" />
      </Table>
      <Table data={secondDay} className="mainTable">
        <Table.Column prop="time" label="Saturday 28th March" width={140} />
        <Table.Column prop="description" label=" " />
      </Table>
    </>
  );
};
