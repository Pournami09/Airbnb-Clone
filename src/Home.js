import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

//ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='Home'>
            <Banner/>
            <div className='home_section'>
                <Card src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720" title="Online Experiences" description="Unique activities we can do together, led by a world of hosts."/>
                <Card src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480" title="Unique stays" description="Spaces that are more than just a place to sleep."/>
                <Card src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480" title="Entire homes" description="Comfortable private spaces, with a room for friends or family."/>
            </div>
            <div className='home_section'>
                <Card src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" title="Penthouse in London" description="Enjoy the amazing sights of London with this stunning penthouse" price="£350/night"/>
                <Card src="https://media.nomadicmatt.com/2018/apartment.jpg" title="1 Bedroom apartment" description="Superhost with great amenities and a fabulous shopping complex nearby" price="£70/night"/>
                <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" title="3 Bedroom Flat in Bournemouth" description="Superhost with a stunning view of the beachside in Sunny Bournemouth" price="£130/night"/>
            </div>
        </div>
    )
}

export default Home
