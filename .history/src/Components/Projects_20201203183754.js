import React from 'react'
import {Card} from 'react-bootstrap'

export default function Projects() {
    return (
        <div className = 'Project_'>
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
