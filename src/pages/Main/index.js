import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Annotation, Description, Title } from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 150.000,00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferencia de R$ 50.000,00 recebida.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}