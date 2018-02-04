import React, { Component } from 'react';
import styled from 'styled-components';
import loremIpsum from 'lorem-ipsum';

const Container = styled.div`
  flex: 1;
  display: flex;
`;

const Nav = styled.div`
  border-right: 1px solid #bbb;
  flex-basis: 20%;
  min-width: 150px;
  overflow-y: auto;
  background-color: #24292e;
  color: #fff;
`;

const NavItem = styled.div`
  border-bottom: 1px solid #bbb;
  padding: 10px;
`;

const Content = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ListActions = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.div`
  margin: 20px;
  background: papayawhip;

  @media (max-width: 900px) {
    color: blue;
  }

  @media (max-width: 600px) {
    background: palevioletred;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  border: 1px solid #000;
  height: 50px;
  width: 150px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Nav>
          {new Array(15).fill(0).map((i, k) =>
            <NavItem key={k}>
              {loremIpsum()}
            </NavItem>
          )}
        </Nav>
        <Content>
          <List>
            {new Array(50).fill(0).map((i, k) =>
              <Item key={k}>
                <p>{loremIpsum()}</p>
              </Item>
            )}
          </List>
          <ListActions>
            <Button type="button" onClick={() => {}}>Send</Button>
          </ListActions>
        </Content>
      </Container>
    );
  }
}

export default App;
