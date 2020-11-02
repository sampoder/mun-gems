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
    {
      First: "Accepts",
      Second: "Draws the attention",
      Third: "Proclaims",
    },
    {
      First: "Affirms",
      Second: "Emphasizes",
      Third: "Reaffirms",
    },
    {
      First: "Approves",
      Second: "Further invites",
      Third: "Recommends",
    },
    {
      First: "Authorizes",
      Second: "Encourages",
      Third: "Regrets",
    },
    {
      First: "Calls",
      Second: "Expresses its appreciation\n   ",
      Third: "Reminds",
    },
    {
      First: "Calls upon",
      Second: "Expresses its hope",
      Third: "Solemnly affirms",
    },
    {
      First: "Condemns",
      Second: "Further invites",
      Third: "Strongly condemns",
    },
    {
      First: "Confirms",
      Second: "Further proclaims",
      Third: "Supports",
    },
    {
      First: "Congratulates",
      Second: "Further reminds",
      Third: "Takes note of",
    },
    {
      First: "Considers",
      Second: "Further recommends",
      Third: "Transmits",
    },
    {
      First: "Declares accordingly",
      Second: "Further requests",
      Third: "Trusts",
    },
    {
      First: "Deplores",
      Second: "Furthers resolves",
      Third: "Requests",
    },
    {
      First: "Designates",
      Second: "Note",
      Third: "\n   ",
    },
  ];

  const secondDay = [
    {
      First: "Affirming",
      Second: "Expressing its appreciation",
      Third: "Keeping in mind",
    },
    {
      First: "Alarmed by",
      Second: "Expressing its satisfaction",
      Third: "Noting with deep concern",
    },
    {
      First: "Approving",
      Second: "Fulfilling",
      Third: "Noting with regret",
    },
    {
      First: "Aware of",
      Second: "Fully alarmed",
      Third: "Noting with satisfaction",
    },
    {
      First: "Bearing in mind",
      Second: "Fully believing",
      Third: "Noting further",
    },
    {
      First: "Believing",
      Second: "Fully deploring",
      Third: "Noting with approval",
    },
    {
      First: "Confident",
      Second: "Further recalling",
      Third: "Observing",
    },
    {
      First: "Contemplating",
      Second: "Guided by",
      Third: "Reaffirming",
    },
    {
      First: "Convinced",
      Second: "Having adopted",
      Third: "Realizing",
    },
    {
      First: "Declaring",
      Second: "Having considered",
      Third: "recalling",
    },
    {
      First: "Deeply concerned",
      Second: "Having devoted attention",
      Third: "Recognizing",
    },
    {
      First: "Deeply conscious",
      Second: "Having examined",
      Third: "Referring",
    },
    {
      First: "Deeply convinced",
      Second: "Having heard",
      Third: "Seeking",
    },
    {
      First: "Deeply disturbed",
      Second: "Having received",
      Third: "Taking into account",
    },
    {
      First: "Deeply regretting",
      Second: "Having studied",
      Third: "Taking into consideration",
    },
    {
      First: "Desiring",
      Second: "Emphasizing",
      Third: "Taking note",
    },
    {
      First: "Emphasizing",
      Second: "Expecting",
      Third: "Viewing with appreciation",
    }
  ];

  const blankData = [];
  return (
    <>
      <Table data={blankData}>
        <Table.Column prop="time" label="Sample operative clauses" />
      </Table>
      <Table data={firstDay} className="mainTable termsTable">
        <Table.Column prop="First" label=" " />
        <Table.Column prop="Second" label=" " />
        <Table.Column prop="Third" label=" " />
      </Table>
      <Spacer y={1} />
      <Table data={blankData}>
        <Table.Column prop="time" label="Sample Preambulatory Phrases" />
      </Table>
      <Table data={secondDay} className="mainTable termsTable">
      <Table.Column prop="First" label=" " />
        <Table.Column prop="Second" label=" " />
        <Table.Column prop="Third" label=" " />
      </Table>
    </>
  );
};
