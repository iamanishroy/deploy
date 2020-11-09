import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import Comments from './Comments';
import './custom.css';
const CommentBox = () => (
  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comments
      uPic='https://creative-world.ml/samples/profile-square.jpg'
      uName='Anish Roy'
      cTime='Today at 5:42PM'
      uMessage='How artistic!!!!!!!!!!!!' />

    <Comments
      uPic='https://creative-world.ml/samples/profile-square.jpg'
      uName='Anish'
      cTime='Today at 5:42PM'
      uMessage='How artistic!!!!!!!!!!!!' />

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='right' icon='send' circular className="butt" />
    </Form>
  </Comment.Group>
)

export default CommentBox;