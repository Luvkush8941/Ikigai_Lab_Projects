import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Card from "./Card";

const cardData = [
  {
    imgSrc: "/Images/img1.jpg",
    title: "Title 1",
    text: "Description 1",
  },
  {
    imgSrc: "/Images/img2.jpg",
    title: "Title 2",
    text: "Description 2",
  },
  {
    imgSrc: "/Images/img3.jpg",
    title: "Title 3",
    text: "Description 3",
  },
  {
    imgSrc: "/Images/img4.jpg",
    title: "Title 4",
    text: "Description 4",
  },
];

export default function Nature() {
  return (
    <>
      <div class="container text-center nature" id="images">
        <div class="row">
          {cardData.map((card, index) => (
            <div className="col" key={index}>
              <Card details={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
