import { Card, Grid, Row, Text, Container, Avatar, Spacer, Col, Input, Button } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <Container style={{marginTop:'20px'}}>
      <Text h1 size={88} css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold">New Brrrrrrrr</Text>
      <Row align="middle">
        <Col span={6}>
          <Input placeholder="Next UI" />
          </Col>
          <Col span={18}>
              <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </Col>
      </Row>
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
                <Text b>{item.title}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    <div style={{position:
    'fixed', bottom:20,right:20 }}>
      <Button auto color="gradient" rounded bordered style={{width:60,height:60}}>➕</Button>
    </div>
    </Container>
  );
}