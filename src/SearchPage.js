import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>62 days ∙ 26 august to 30 august ∙ 2 guests </p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult 
                 img="https://media.gettyimages.com/photos/rendering-of-an-elegant-bedroom-picture-id1213695547?k=6&m=1213695547&s=612x612&w=0&h=6g9Av9QXdzKKYUR5qd7JTKXD7z2rMXMqmWgWz6Sk8CM="
                 location="Dome house in Krakowski"
                 title="FRIDA domek na wyłączność w JURA GLAMP igloo ogród"
                 description="4 guests · 2 bedrooms · 3 beds · 1 bathroom"
                 star={4.60}
                 price="£30 / night"
                 total="£117 / night"/>

            <SearchResult 
                 img="https://a0.muscache.com/im/pictures/c10dd519-e9d3-4dd1-a876-1c2e34e3098a.jpg?im_w=960"
                 location="Houseboat in Jickovice"
                 title="Loďka na Orlíku, to chceš!"
                 description="4 guests · 4 beds · 0 bathrooms"
                 star={3.73}
                 price="£60 / night"
                 total="£908 / night"/>

            <SearchResult 
                 img="https://a0.muscache.com/im/pictures/1cf60c7d-3850-45f7-9e82-d679dc5a72a1.jpg?im_w=720"
                 location="Private room in Manhattan"
                 title="My little cottage"
                 description="1 guest ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen ∙ Free parking ∙ Washing machine"
                 star={9.03}
                 price="£90 / night"
                 total="£710 / night"/>

            <SearchResult 
                 img="https://a0.muscache.com/im/pictures/e3138abe-9d33-44f7-a9e6-e4b4a48d7389.jpg?im_w=960"
                 location="Private room in Queens"
                 title="Urban Boutique Room 3"
                 description="2 guests · 1 bedroom · 1 bed · 1 private bathroom"
                 star={8.52}
                 price="£300 / night"
                 total="£717 / night"/>

            <SearchResult 
                 img="https://media.gettyimages.com/photos/luxury-bedroom-interior-picture-id1141951033?k=6&m=1141951033&s=612x612&w=0&h=h3FLCHrI8QXRKNTvzMEdZwOR6R01WrQGrpxKPnw8CnE="
                 location="Private room in center of London"
                 title="Stay at this spacious Edwardian House"
                 description="5 guest ∙ 2 bedroom ∙ 1 bed ∙ 2 shared bathrooms ∙ Wifi ∙ Free parking"
                 star={6.93}
                 price="£40 / night"
                 total="£317 / night"/>

            <SearchResult 
                 img="https://media.gettyimages.com/photos/loft-room-with-sofa-picture-id1153447397?k=6&m=1153447397&s=612x612&w=0&h=UrYlLltHPLT5jfJTRrC14HgWPMlcL_amZyU-LHJ20_8="
                 location="Private room in Brooklyn"
                 title="Minimalist House"
                 description="4 guest ∙ 6 bedroom ∙ 1 bed ∙ 3.5 shared bathrooms ∙ Wifi "
                 star={5.79}
                 price="£35 / night"
                 total="£187 / night"/>
        </div>
    )
}

export default SearchPage
