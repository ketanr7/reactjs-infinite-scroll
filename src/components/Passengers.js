import React, { useState, useEffect } from 'react';
import { Link,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Row,Navbar,Nav,Button,Modal,Form,FormControl,NavDropdown} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPassengersList } from './MainSlice'
import logo from '../logo-with-text.svg'
import logoBig from '../logo.jpg'
import Timer from './Timer'

import './Main.css'

const Passengers = (props) => {
    
  const dispatch = useDispatch()
  const history = useHistory();

  const { title, id } = props

  const [page, setPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
   const [timer, setTimerOn] = useState(true);
  const cards = useSelector((state) => state.passengers.contactCollection)
  const hasMore = useSelector((state) => state.passengers.hasMore)
  useEffect(() => {
    dispatch(getPassengersList({ page }))
        setPage(prevState => prevState + 1);

  }, []);
  
  const fetchContacts = () => {
    setPage(prevState => prevState + 1);
      setTimeout(() => {
       if (hasMore) {
      dispatch(getPassengersList({ page }))
    }
    }, 1000);  
  };

  const cardDetails =
    (cards ?
      <InfiniteScroll
        dataLength={cards.length}
        next={fetchContacts}
        hasMore={hasMore}
        loader={<h4 className="cardLoader">Loading...</h4>}
      >{
          <Row>{
            cards.map((card, index) =>
            (
              <Col xl={4} lg={6} md={6} key={index}>
                <Card className="box"  >
                    <Card.Body>
                      <div className="cardDiv">
                        <div className="imgDiv"><img src={Array.isArray(card.airline) ? card.airline[0].logo : card.airline.logo} alt={card.airline.name}/></div>
                        <div className="extraDetails">
                          <Card.Title>{card.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            <div>
                              <p>Airline</p>
                              <p>{Array.isArray(card.airline) ? card.airline[0].name : card.airline.name}</p>
                            </div>
                            <div>
                              <p>Country</p>
                              <p>{Array.isArray(card.airline) ? card.airline[0].country : card.airline.country}</p>
                            </div>
                          </Card.Subtitle>
                          
                        </div>
                      </div>
                    </Card.Body>
                  
                </Card>
              </Col>
            )
            )
          }</Row>
        }
      </InfiniteScroll> : <h3>No Record</h3>
    )

  return (
    <Row className="cardContainer" >{cardDetails}</Row>
  )
}

export default Passengers