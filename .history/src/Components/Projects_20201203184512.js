import React from 'react'
import {Card} from 'react-bootstrap'
import "./All.css";

export default function Projects() {
    return (
        <div className = 'Project_container'>
     <Card className="bg-dark text-white w-100 h-50">
  <Card.Img src="constrution_work.jpg" alt="Card image" />
     <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>



<Card className="bg-dark text-white w-100 h-50">
  <Card.Img src="constrution_work.jpg" alt="Card image" />
     <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    )
}
