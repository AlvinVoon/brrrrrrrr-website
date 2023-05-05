import { Card, Grid, Row, Text, Container, Avatar, Spacer, Col, Input, Button, Image } from "@nextui-org/react";
import Link from 'next/link';

export default function Info(){
    return(
        <Container style={{marginTop:'20px'}}>
            <Link href="/">
            <Text style={{color:"white"}}>Go back</Text>
            </Link>
            <Col>
        <Image width={1200} height={500} src={"https://www.teslarati.com/wp-content/uploads/2017/11/Roadster_Front_34_1-e1512593855725.jpg"} style={{borderRadius:40}}/>
        <Text style={{color:"white"}}>Hi again</Text>
        </Col>
        </Container>
    );
}