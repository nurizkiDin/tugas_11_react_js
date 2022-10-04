import { 
  List, Loader, Dimmer, Placeholder, Segment,
  Grid, Icon, Header, Input, Button, Divider, Image
} from "semantic-ui-react";

function App() {
  return (
    <>
    <Segment>
      <Grid columns={2} textAlign="center">
        <Grid.Row verticalAlign="middle" style={{padding:"50px"}}>
          <Divider vertical>OR</Divider>
          <Grid.Column>
            <Header icon>
              <Icon name="search"/>
              Cari Document              
            </Header>
            <br/>
            <Input icon="search" placeholder="Search Document..."/>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="pdf file outline"/>
              Tambah Document Baru              
            </Header>
            <br/>
            <Button primary>Create Document</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <p>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </p>
          <Dimmer active>
            <Loader/>
          </Dimmer>
        </Grid.Row>
      </Grid>
    </Segment>
    <Grid columns={3} stackable>
      <Grid.Column>
        <Segment raised>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <List>
          <List.Header as="h3">Website Terkait</List.Header>
          <List.Item>
            <List.Icon name="linkify"/>
            <List.Content>
              <a 
                href="https://www.google.com/"
                target="_blank" 
                rel="noreferrer">
                  Google
              </a>
            </List.Content>
          </List.Item><List.Item>
            <List.Icon name="linkify"/>
            <List.Content>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer">
                  Facebook
              </a>
            </List.Content>
          </List.Item><List.Item>
            <List.Icon name="linkify"/>
            <List.Content>
              <a 
                href="https://react.semantic-ui.com/" 
                target="_blank" 
                rel="noopener noreferrer">
                  Semantic UI
              </a>
            </List.Content>
          </List.Item><List.Item>
            <List.Icon name="linkify"/>
            <List.Content>
              <a 
                href="https://niomic.id/" 
                target="_blank" 
                rel="noopener noreferrer">
                  Niomic
              </a>
            </List.Content>
          </List.Item><List.Item>
            <List.Icon name="linkify"/>
            <List.Content>
              <a 
                href="https://reactjs.org/" 
                target="_blank" 
                rel="noopener noreferrer">
                  React
              </a>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
    </>
  );
}

export default App;
