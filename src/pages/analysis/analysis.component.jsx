import React,{useState} from 'react';
import "./analysis.style.css";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell,PieChart, Pie, Sector,} from "recharts";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {db,rt} from '../../firebase';
import Image from 'react-bootstrap/Image';

function Analysis() {
  const [image1,setImage1] = useState('');
  const [i2,setI2]= useState('');
  const [i3,setI3] = useState('');
  const [i4,setI4]= useState('');
  const [i5,setI5] = useState('');
  const [i6,setI6]= useState('');
  useState(()=>{
    async function fetchImages() {
      const request = await db.child(`Image00.jpeg`).getDownloadURL()
      setImage1(request)
      const request2 = await db.child(`Image01.jpeg`).getDownloadURL()
      setI2(request2)
      const request3 = await db.child(`Image02.jpeg`).getDownloadURL()
      setI3(request3)
      const request4 = await db.child(`Image03.jpeg`).getDownloadURL()
      setI4(request4)
      const request5 = await db.child(`Image04.jpeg`).getDownloadURL()
      setI5(request5)
      const request6 = await db.child(`Image00.jfif`).getDownloadURL()
      setI6(request6)

      // rt.child('temp-hum-ba71c-default-rtdb').child('Sensor_1').child().get().then((snapshot) => {
      //   if (snapshot.exists()) {
      //     console.log(snapshot.val());
      //   } else {
      //     console.log("No data available");
      //   }
      // }).catch((error) => {
      //   console.error(error);
      // });

      return request
    }
    fetchImages();
    // db.child(`Image00.jpeg`).getDownloadURL().then((url) => {
    //   setImage1(url)
    // }).catch((error) => {
    //   // Handle any errors
    // })  
    console.log("image1",image1)
  },[])
    const data1 = [
        {
          name: 'Sunday', this_week: 30, last_week: 33, amt: 600,
        },
        {
          name: 'Monday', this_week: 34, last_week: 37, amt: 600,
        },
        {
          name: 'Tuesday', this_week: 41, last_week: 41, amt: 600,
        },
        {
          name: 'Wedne', this_week: 43, last_week: 39, amt: 600,
        },
        {
          name: 'Thursday', this_week: 41, last_week: 42, amt: 600,
        },
        {
          name: 'Friday', this_week: 40, last_week: 38, amt: 600,
        },
        {
          name: 'Saturday', this_week: 47, last_week: 43, amt: 600,
        },
      ];

      const data2 = [
        {
          name: 'Sun', this_week: 0.1, last_week: 0.4, amt: 0.5,
        },
        {
          name: 'Mon', this_week: 0.15, last_week: 0.2, amt: 0.5,
        },
        {
          name: 'Tue', this_week: 0.2, last_week: 0.1, amt: 0.5,
        },
        {
          name: 'Wedne', this_week: 0.05, last_week: 0.01, amt: 0.5,
        },
        {
          name: 'Thurs', this_week: 0.1, last_week: 0.1, amt: 0.5,
        },
        {
          name: 'Frid', this_week: 0.2, last_week: 0.2, amt: 0.5,
        },
        {
          name: 'Satur', this_week: 0.3, last_week: 0.1, amt: 0.5,
        },
      ];

      const data3 = [
        { name: 'Nitrogen', value: 400 },
        { name: 'Phosphorous', value: 300 },
        { name: 'Potassium', value: 300 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
      }) => {
         const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <div className="pt-3 pb-3" id="analysis">
            {/* <h1 className="text-center font-details-b pb-4">ANALYSIS</h1>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                    <Col md={6}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">MAXIMUM TEMPERATURE</Card.Title>
                                <hr />
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data1}
                                    margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="last_week" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="this_week" stroke="#82ca9d" />
                                </LineChart>
                            </Card.Body>
                        </Card>
                        
                    </Col>

                    <Col md={6}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">MOISTURE CONTENT</Card.Title>
                                <hr />
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data2}
                                    margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="this_week" fill="#8884d8" />
                                    <Bar dataKey="last_week" fill="#82ca9d" />
                                </BarChart>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    
                </Row>
                
            </CardDeck> */}
            <h1 style={{marginTop:'60px'}} className="text-center font-details-b pb-4">Latest Images Uploaded</h1>

                <Image style={{height:'400px',width:'500px',marginRight:'50px',marginTop:'30px'}} src={image1}/>
                <Image style={{height:'400px',width:'500px',marginTop:'30px'}} src={i2}/>
                <Image style={{height:'400px',width:'500px',marginRight:'50px',marginTop:'50px'}} src={i3}/>
                <Image style={{height:'400px',width:'500px',marginTop:'50px'}} src={i4}/>
                <Image style={{height:'400px',width:'500px',marginRight:'50px',marginTop:'50px'}} src={i5}/>
                <Image style={{height:'400px',width:'500px',marginTop:'50px'}} src={i6}/>
            
            
        </div>
    )
}

export default Analysis;
