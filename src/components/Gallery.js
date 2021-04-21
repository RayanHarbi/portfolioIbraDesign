import React from "react"
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import { Carousel } from "react-bootstrap"
import "react-popupbox/dist/react-popupbox.css"

//slider for villa 1
function Gallery() {
  const openGalleryOne = () => {
    const content = (
      <>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-img" src="https://e.top4top.io/p_19353x8xa1.jpeg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="https://f.top4top.io/p_1935cimg92.jpeg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="https://g.top4top.io/p_193556qv83.jpeg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </>
    )
    PopupboxManager.open({ content })
  }

  //slider for villa 2

  function openGalleryThree() {
    const content = (
      <>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-img2" src="https://d.top4top.io/p_1935hvax41.jpeg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img2" src="https://e.top4top.io/p_19359m0pz2.jpeg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img2" src="https://f.top4top.io/p_1935dupjc3.jpeg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img2" src="https://g.top4top.io/p_193531m7w4.jpeg" alt="Forth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img2" src="https://h.top4top.io/p_1935zq6ws5.jpeg" alt="Fivth slide" />
          </Carousel.Item>
        </Carousel>
      </>
    )
    PopupboxManager.open({ content })
  }
  //slider for villa 3

  function openGalleryTwo() {
    const content = (
      <>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-img" src="https://g.top4top.io/p_1935v09mi1.jpeg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="https://h.top4top.io/p_1935rn8sk2.jpeg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="https://i.top4top.io/p_1935zb8oe3.jpeg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="https://j.top4top.io/p_19359kfgu4.jpeg" alt="Forth slide" />
          </Carousel.Item>
        </Carousel>
      </>
    )
    PopupboxManager.open({ content })
  }
  const popupboxConfigGallery = { overlayOpacity: 0.75 }

  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <h2 className="gallery-h2 text-center py-5">معرض الاعمال</h2>

        <div className=".image-box row justify-content-center">
          <div className="gallery-box" onClick={openGalleryOne}>
            <img className="gallery-img" src="https://e.top4top.io/p_19353x8xa1.jpeg" alt="" />
            <h3 className="gallery-h3 text-center py-5">فيلا سكنية</h3>
          </div>

          <div className="gallery-box" onClick={openGalleryThree}>
            <img className="gallery-img" src="https://c.top4top.io/p_1937gkx6o1.png" alt="" />
            <h3 className="gallery-h3 text-center py-5">استراحة خاصة</h3>
          </div>

          <div className="gallery-box" onClick={openGalleryTwo}>
            <img className="gallery-img" src="https://g.top4top.io/p_1935v09mi1.jpeg" alt="" />
            <h3 className="gallery-h3 text-center py-5">فيلا سكنية</h3>
          </div>
        </div>
      </div>

      <PopupboxContainer {...popupboxConfigGallery} />
    </div>
  )
}

export default Gallery
