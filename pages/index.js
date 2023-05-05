import { Card, Grid, Row, Text, Container, Avatar, Spacer, Col, Input, Button, Progress } from "@nextui-org/react";
import Link from 'next/link';
import {SSRProvider} from '@react-aria/ssr';

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
      name:"Alvin",
      value:50,
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
      value:20,
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
      value:80,
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
      value:50,
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
      value:90,
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
      value:10,
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
      value:55,
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      value:76,
    },
  ];

  return (
    <SSRProvider>
    <Container style={{marginTop:'20px'}}>
    <Row align="middle">
      <Col span={24}>
      <Text h1 size={88} css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"> Brrrrrrrr</Text>
        </Col>
        <Col span={2}>
              <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d" style={{marginTop:25, width:50, height:50}}/>
          </Col>
              </Row>
          <Input placeholder="Search" />
    <Grid.Container gap={2} justify="flex-start" >
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable onPress={console.log("It work")}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://nextui.org" + item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap"
              align="center">
                <Row>
                <Col span={24}>
                  <Col>
                <Text b>{item.title}</Text>
                </Col>
                <Col>
                <Progress color="primary" shadow value={item.value} />
                </Col>
                </Col>
                <Spacer x={1}/>
                <Col span={15}>
                  <Link href="./info">
                <Button size="sm">Learn More</Button>
                </Link>
                </Col>
                </Row>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    <div style={{position:
    'fixed', bottom:20,right:20 }}>
      <Button auto color="gradient" rounded bordered style={{width:60,height:60}}><Text style={{fontSize:20}}>➕</Text></Button>
    </div>
    </Container>
    </SSRProvider>
  );
}