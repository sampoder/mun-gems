import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-grid-system";
import {
  Button,
  Image,
  Card,
  Link,
  Divider,
  Collapse,
  Text,
  Grid,
  useMediaQuery,
  Row as GeistRow,
} from "@geist-ui/react";

export default function Home() {
  const isXS = useMediaQuery("xs");
  const isSM = useMediaQuery("sm");
  const isMD = useMediaQuery("md");
  const isLG = useMediaQuery("lg");
  const isXL = useMediaQuery("xl");
  return (
    <div className={styles.container}>
      <Head>
        <title>MUN @ GEMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: "300000000px",
            padding: "0px",
          }}
        >
          <Row style={{display: isXS && "none" }}>
            <Col
              sm={6}
              style={{
                height: "100vh",
                background: "black",
                color: "white",
                padding: "60px",
                paddingTop: "40px",
                backgroundImage:
                  "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 26%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 26%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23c39eff' fill-opacity='0.07'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            >
              <p style={{ textDecoration: "underline" }}>
                MUN @ GEMS - March 28 & 29th
              </p>
              <div className={styles.verticalCenter}>
                <h3 style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>
                  What change would you make if you were
                </h3>
                <h1
                  style={{
                    fontSize: "80px",
                    marginBlockStart: "0em",
                    marginBlockEnd: "0em",
                    lineHeight: "1.35",
                  }}
                >
                  Black Panther?
                </h1>
                <p style={{ marginBlockStart: "0.1em", paddingRight: "150px" }}>
                  At MUN @ GEMS (March 28 & 29th), you have the chance to
                  represent cultural icons and draft solutions for major issues
                  in fictional worlds. Our committees include Marvel vs. DC,
                  Star Wars & the Wizarding World. It's a great way to have fun
                  and get started with MUN!
                </p>
                <Button
                  auto
                  type="secondary"
                  style={{ border: "1px white solid" }}
                >
                  Sign up now.
                </Button>
              </div>
            </Col>
            <Col
              sm={6}
              style={{
                height: "100vh",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 56%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 46%), url('https://i.pinimg.com/originals/90/3d/a5/903da5243a51e0ee18c73c748a920267.gif'), rgba(0,0,0,0)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Col>
          </Row>
        </Container>
        <Container
          style={{
            width: "100%",
            maxWidth: "300000000px",
            padding: "0px",
          }}
        >
          <Grid.Container
            gap={2}
            justify="center"
            style={{ padding: "40px", paddingBottom: "10px" }}
          >
            <Grid xs={24} md={16} sm={24} style={{ padding: "10px" }}>
              <Card>
                <h4>What is MUN @ GEMS?</h4>
                <p>
                  MUN @ GEMS is a student-led initiative where students
                  participate as delegates in a simulated Model of the United
                  Nations to discuss Current affairs and potential solutions to
                  world issues. Our goal is for students to gain deeper
                  understanding and enthusiasm towards international relations
                  through discussions, collaboration and friendly debates.
                  <br />
                  <br />
                  Moreover, MUN @ GEMS stands out due to the introduction of
                  Fictional Committees such as star wars and harry potter that
                  relate to the modern day generation. With this in mind, we
                  hope that students would understand and grasp the role of the
                  United Nations in maintaining World Peace.
                </p>
                <Card.Footer>
                  <Link color href="/about">
                    More about us
                  </Link>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid xs={24} md={8} sm={24} style={{ padding: "10px" }}>
              <Card>
                <h4>Key Dates</h4>
                <p>
                  <b style={{ fontWeight: "450" }}>Registration opens:</b> 10th
                  January 2021
                  <br />
                  <br />
                  <b style={{ fontWeight: "450" }}>
                    Delegate handbooks released:
                  </b>{" "}
                  ?? January 2021
                  <br />
                  <br />
                  <b style={{ fontWeight: "450" }}>Registration closes:</b> 10th
                  March 2021
                  <br />
                  <br />
                  <b style={{ fontWeight: "450" }}>
                    Position papers deadline:
                  </b>{" "}
                  TBD
                  <br />
                  <br />
                  <b style={{ fontWeight: "450" }}>Conference begins:</b> 28th
                  March 2021
                </p>
              </Card>
            </Grid>
          </Grid.Container>
        </Container>
        <Container
          style={{
            width: "100%",
            maxWidth: "300000000px",
            padding: "0px",
          }}
        >
          <Grid.Container
            gap={2}
            justify="center"
            style={{
              padding: "40px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Grid xs={24} md={6} sm={12} style={{ padding: "10px" }}>
              <Card>
                <Image
                  src="https://qph.fs.quoracdn.net/main-qimg-e618b46fdef386dc770268eb13788e09"
                  height="200"
                  style={{ objectFit: "cover" }}
                />
                <h4>Marvel vs. DC</h4>
                <p>
                  The first topic will be the aftermath of Endgame & the quest
                  for Infinity Stones. The second will be Maintaining status quo
                  between the avengers and Justice league and ensuring peace and
                  stability during COVID-19 Pandemic.
                </p>
                <Card.Footer>Research reports coming soon.</Card.Footer>
              </Card>
            </Grid>
            <Grid xs={24} md={6} sm={12} style={{ padding: "10px" }}>
              <Card>
                <Image
                  src="https://i.ytimg.com/vi/07DiRUvD2Hk/maxresdefault.jpg"
                  height="200"
                  style={{ objectFit: "cover" }}
                />
                <h4>Star Wars</h4>
                <p>
                  The first topic for the committee will be the plans for the
                  Death Star, and their impact on the galaxy. The second topic
                  that the committee will be discussing is should the Jedi face
                  the punishment for their countless war crimes?
                </p>
                <Card.Footer>Research reports coming soon.</Card.Footer>
              </Card>
            </Grid>
            <Grid xs={24} md={6} sm={12} style={{ padding: "10px" }}>
              <Card>
                <Image
                  src="https://thesunflower.com/wp-content/uploads/2017/03/DSC00539-900x821.jpg"
                  height="200"
                  style={{ objectFit: "cover" }}
                />
                <h4>Unnamed Committee</h4>
                <p>
                  The first topic for the committee will be the matter of
                  payment for NCAA college athletes and whether or not they
                  should receive it. The second topic will be the influence of
                  sports in preventing discrimination and how sport can fight
                  discrimination.
                </p>
                <Card.Footer>Research reports coming soon.</Card.Footer>
              </Card>
            </Grid>
            <Grid xs={24} md={6} sm={12} style={{ padding: "10px" }}>
              <Card>
                <Image
                  src="https://images.ctfassets.net/usf1vwtuqyxm/3gwg71QLQIwSAsS4a6Sikw/571830df605046a551696a9d8ca6ec68/CorneliusFudge_WB_F5_FudgeUmbridgeShackleboltInDumbledoresOffice_Still_080615_Land.jpg?fm=jpg"
                  height="200"
                  style={{ objectFit: "cover" }}
                />
                <h4>The Wizarding World</h4>
                <p>
                  In this committee the first topic will be curbing the Second
                  Wizard War. In the second session, delegates will be
                  discussing measures to improve coordination within the
                  Wizarding World amid the ongoing COVID-19 pandemic.
                </p>
                <Card.Footer>Research reports coming soon.</Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>

          <Grid.Container
            gap={2}
            justify="center"
            style={{ padding: "40px", paddingTop: "10px", paddingBottom: "10px" }}
          >
            <Grid xs={24} md={24} sm={24}>
              <Card>
                <h3 style={{ padding: "0 0pt" }}>Frequently Asked Questions</h3>
                <Grid.Container gap={2} justify="center">
                  <Grid xs={24} md={12} sm={12}>
                    <Collapse.Group style={{ padding: "0 0pt" }}>
                      <Collapse title="Where is it happening?">
                        <Text>
                          Virtually! we will be using zoom to host our mun,
                          although we will not be able to provide food, we hope
                          to provide you with a bundle of joy!
                        </Text>
                      </Collapse>
                      <Collapse title="What is the theme?">
                        <Text>When fantasy meets reality!</Text>
                      </Collapse>
                      <Collapse
                        style={{ display: !isXS && "none" }}
                        title="Who can attend MUN @ GEMS?"
                      >
                        <Text>
                          Any student in Grade 6 to 11, or their school's
                          equivalent.
                        </Text>
                      </Collapse>
                      <Collapse
                        style={{ display: !isXS && "none" }}
                        title="What is the official language of the conference?"
                      >
                        <Text>
                          All sessions will be in English, participants will
                          require conversation level proficiency.
                        </Text>
                      </Collapse>
                    </Collapse.Group>
                  </Grid>
                  <Grid xs={24} md={12} sm={12}>
                    <Collapse.Group
                      style={{ padding: "0 0pt", display: isXS && "none" }}
                    >
                      <Collapse title="Who can attend MUN @ GEMS?">
                        <Text>
                          Any student in Grade 6 to 11, or their school's
                          equivalent.
                        </Text>
                      </Collapse>
                      <Collapse title="What is the official language of the conference?">
                        <Text>
                          All sessions will be in English, participants will
                          require conversation level proficiency.
                        </Text>
                      </Collapse>
                    </Collapse.Group>
                  </Grid>
                </Grid.Container>
              </Card>
            </Grid>
          </Grid.Container>
          <Grid.Container
            gap={2}
            justify="center"
            style={{ padding: "40px", paddingTop: "10px" }}
          >
            <Grid xs={24} md={24} sm={24}>
              <Card>
                <Grid.Container gap={2} justify="center">
                  <Grid xs={24} md={12} sm={12}>
                    <h3>
                      Tickets are $5 per person, all money goes to charity.
                    </h3>
                  </Grid>
                  <Grid xs={24} md={12} sm={12} style={{ textAlign: "right" }}>
                    <Button type="secondary" style={{ marginTop: "-1px" }}>
                      Opening January 10th
                    </Button>
                  </Grid>
                </Grid.Container>
              </Card>
            </Grid>
          </Grid.Container>
        </Container>
      </main>

      <footer className={styles.footer}>
        <span>
        <span><b>Contact email:</b> <a href="mailto:mun@gwa.edu.sg">mun@gwa.edu.sg</a>.</span>
          <br /> <br />
          Supported by <a href="https://gwa.edu.sg">GEMS World Academy Singapore.</a>
        </span>
      </footer>
    </div>
  );
}
