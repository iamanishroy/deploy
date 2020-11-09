import React from 'react'
import { Comment, Feed, Icon } from 'semantic-ui-react'

const Comments = (props) => (
    <Comment>
        <Comment.Avatar src={props.uPic} />
        <Comment.Content>
            <Comment.Author as='a'>{props.uName}</Comment.Author>
            <Comment.Metadata>
                <div>{props.cTime}</div>
            </Comment.Metadata>
            <Comment.Text>{props.uMessage}</Comment.Text>
            <Comment.Actions>
                <Comment.Action>
                    <Feed.Meta>
                        <Feed.Like>
                            <Icon name='thumbs up outline' /> Like
                        </Feed.Like>
                        <Feed.Like>
                            <Icon name='thumbs down outline' /> Dislike
                        </Feed.Like>
                    </Feed.Meta>
                </Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>
)

export default Comments;

