import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { photo_src } from '../utils/photo_src';

export const ItemCard = ({
  id,
  category,
  name,
  photo,
  full_description,
  short_description,
  stock,
}) => {
  return (
    <Card
      key={id}
      style={{ width: '15rem' }}
      className="justify-content-center mx-1 my-1">
      <Card.Img
        variant="top"
        src={photo_src(photo, id)}
        alt={`Foto bien guapa de ${name}`}
        height="150"
        width="100"
        className="rounded mx-auto d-block"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{short_description}</Card.Text>
        <Card.Text>Disponibles: {stock}</Card.Text>
        <Button
          as={Link}
          to={`/item/${id}`}
          variant="primary">
          Descripción
        </Button>
      </Card.Body>
    </Card>
  );
};
