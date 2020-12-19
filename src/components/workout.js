import React from 'react';
import {useSelector} from 'react-redux';
import {Carousel, Jumbotron, Container} from 'react-bootstrap';
import './workout.scss';
import Stopwatch from './timer.js';



export default function Timer() {

    const pushups = useSelector( state => state.pushups);
    const pullups = useSelector( state => state.pullups);
    const squats = useSelector( state => state.squats);
    const lunges = useSelector( state => state.lunges);

    return (
        <div className='timer'>
            <Jumbotron fluid>   
                <Container>
                    <h1>Time-4-Fitness</h1>
                    <p>
                    Simple fitness app to time your Calisthenic exercises!
                    </p>
                </Container>
            </Jumbotron>

            <div id=''>
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1557564437-0995702f88fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Push Ups"
                        />
                        <Carousel.Caption>
                        <h3>{pushups[0]}</h3>
                        <p>{pushups[1]}</p>
                        <Stopwatch/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1557564437-0995702f88fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Pull ups"
                        />
                        <Carousel.Caption>
                        <h3>{pullups[0]}</h3>
                        <p>{pullups[1]}</p>
                        <Stopwatch/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1557564437-0995702f88fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Squats"
                        />
                        <Carousel.Caption>
                        <h3>{squats[0]}</h3>
                        <p>{squats[1]}</p>
                        <Stopwatch/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1557564437-0995702f88fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Lunges"
                        />
                        <Carousel.Caption>
                        <h3>{lunges[0]}</h3>
                        <p>{lunges[1]}</p>
                        <Stopwatch/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

           
        </div>
    )
}

