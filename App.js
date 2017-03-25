import React from 'react'
import { View, Text } from 'react-native'
import { Button, Container, Content, Body, Card, CardItem } from 'native-base'

export default function App() {
  return (
    <Container>
      <Content>
        <Button full>
          <Text style={{ color: 'white' }}>Facebookでログイン</Text>
        </Button>
      </Content>
    </Container>
  )
}
