import {useState, useEffect} from 'react';
import './CountdownTimer.css';
// import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';
import Homepage from "../../assets/homepage.jpg";
import Button from 'react-bootstrap/Button';
import { Container, Row , Col} from 'react-bootstrap';
import Timer from '../Timer';

// const defaultRemainingTime = {
//     seconds: '00',
//     minutes: '00',
//     hours: '00',
//     days: '00'
// }

const CountdownTimer = ({countdownTimestampMs}) => {
    // const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         updateRemainingTime(countdownTimestampMs);
    //     }, 1000);
    //     return () => clearInterval(intervalId);
    // },[countdownTimestampMs]);

    // function updateRemainingTime(countdown) {
    //     setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    // }
    return(
        <Container>

       
        <main>

            <div>Featured contest of the month - American Taste Away “Super Elvis” Challenge. Countdown to chowdown:</div>
            <Button type="button">eat
            <a href= "https://www.americantasteaway.com/" rel="noreferrer"></a>
            </Button>
      

        <Timer
        countdownTimestampMs={1659983662000}
        />

        <div>
            <p>Love to eat? well so do we, here you will find a list of upcoming eating contest. If you want to participate or just enjoy the show you have come to the right place. Hope your enjoy our website. We are not responsible for any weight gain, enter at your own risk.</p>
        </div>
        <div className="Homepage">
          <img src={Homepage} alt="hot dog eatting" style={{ width: "400px" }} />
        </div>
        </main>
        </Container>
    );
}

export default CountdownTimer;



// import React from 'react';

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
    //     velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
    //     ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
    //     non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
    //     ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
    //     rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
    //     tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
    //     porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
    //     vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
    //     fames ac ante ipsum pri
    //   </p>
//     </div>
//   );
// }
