import c1 from "../assets/images/udemy pic/c1.jpg"
import c2 from "../assets/images/udemy pic/c2.jpg"
import c3 from "../assets/images/udemy pic/c3.jpg"
import c4 from "../assets/images/udemy pic/c4.jpg"




function Recommended(){
    return(
      <div class="recommended">
          <h1 class="recommended__title">Recommended for you</h1>
          <p>Pick the best fit</p>
          <div class="recommended__container">
              <div class="course-card">
                  <img src={c1} alt="c1"></img>
                  <h3>Python Data Visualization Masterclass 2024</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c2} alt="c2"></img>
                  <h3> Complete Web Development Bootcamp 2024</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>2999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c3} alt="c3"></img>
                  <h3>Master UI/UX Designing with Figma Tool</h3>
                  <p>Col Steele</p>
                  <p>3.9 ⭐⭐⭐</p>
                  <p>449 <del>999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c4} alt="c4"></img>
                  <h3>Basic to Advance Programming with PsyCoder</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1499</del></p>
              </div>
  
          </div>
      </div>
    )
  }

  export default Recommended