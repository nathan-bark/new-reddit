import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import redditLogo from '../../Assets/reddit-logo.png'

function SubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={redditLogo} />
      <Card.Body>
        <Card.Title>r/SubReddit</Card.Title>
        <Card.Text>
          A smalledscription of the subreddit
        </Card.Text>
        <p>members</p>
        <Button variant="primary">Visit</Button>
        <Button variant="secondary">Like </Button>
      </Card.Body>
    </Card>
  );
}

export default SubCard;