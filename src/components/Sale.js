import saleImage from "../assets/images/udemy pic/saleImage.jpg"

function Sale(){
    return(
      <div class="sale-image">
          <img src={saleImage} alt="Sale Image"></img>
          <div class="sale-image__offer">
              <h2>Udemy Flash Sale! 24 hours to save</h2>
              <p>Get the top courses for just 499. Just one day to save but lifetime to learn</p>
          </div>
      </div>
    )
  }

  export default Sale