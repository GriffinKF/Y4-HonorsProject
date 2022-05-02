import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import GridCard from "./GridCard";
import BreakdownBlurbs from "../assets/jsons/BreakdownBlurbs.json";

function importAll(r) {
    let images = {}
    r.keys().forEach((item) => {images[item.replace("./", "")] = r(item)})
    return images
}
const images = importAll(
    require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
)

function InitialGrid() {
    const gridCardComponents = BreakdownBlurbs.map((breakdowns) => (
        <GridCard
            key={breakdowns.ID}
            path={breakdowns.ID}
            breakdownTitle={breakdowns.Title}
            breakdownDesc={breakdowns.Description}
            breakdownImage={images[breakdowns.Image]}
        />
    ));
  
  return (
    <div>
      <Container>
        <CardGroup>
            {/* Image Sourced from isourcephoto.com */}
            {gridCardComponents[0]}
            {/* Image Sourced from Tincture.io */}
            {gridCardComponents[1]}
            {/* Image Sourced from WorldAtlas.com */}
            {gridCardComponents[2]}
        </CardGroup>
        <CardGroup>
            {/* Image Sourced from CGTN.com */}
            {gridCardComponents[3]}
            {/* Image Sourced from iStockPhoto.com */}
            {gridCardComponents[4]}
            {/* Image Sourced from business2community.com */}
            {gridCardComponents[5]}
        </CardGroup>
      </Container>
    </div>
  );
}

export default InitialGrid;
