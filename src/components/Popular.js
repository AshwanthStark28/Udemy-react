import c5 from "../assets/images/udemy pic/c5.jpg"
import c6 from "../assets/images/udemy pic/c6.jpg"
import c7 from "../assets/images/udemy pic/c7.jpg"
import c8 from "../assets/images/udemy pic/c8.jpg"
import c9 from "../assets/images/udemy pic/c9.jpg"
import c10 from "../assets/images/udemy pic/c10.jpg"
import c11 from "../assets/images/udemy pic/c11.jpg"
import c12 from "../assets/images/udemy pic/c12.jpg"


function Popular(){
    return(
      <div class="popular">
          <h1 class="popular__title">Most Popular</h1>
          <p class="popular__subtitle">Pick the best fit</p>
          <div class="popular__container">
              <div class="course-card">
                  <img src={c5} alt="c5"></img>
                  <h3>React JS </h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c6} alt="c6"></img>
                  <h3> Complete SQL Bootcamp</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>2999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c7} alt="c7"></img>
                  <h3>Introduction to AI and ML</h3>
                  <p>Col Steele</p>
                  <p>3.9 ⭐⭐⭐</p>
                  <p>449 <del>999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c8} alt="c8"></img>
                  <h3>Complete BackEnd Development</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1499</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c9} alt="c9"></img>
                  <h3>Marketing Strategy</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c10} alt="c10"></img>
                  <h3>DSA using Java</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>2999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c11} alt="c11"></img>
                  <h3>Introduction to Automation testing</h3>
                  <p>Col Steele</p>
                  <p>3.9 ⭐⭐⭐</p>
                  <p>449 <del>999</del></p>
              </div>
  
              <div class="course-card">
                  <img src={c12} alt="c12"></img>
                  <h3>MERN Stack Course</h3>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐</p>
                  <p>449 <del>1499</del></p>
              </div>
  
          </div>
      </div>
    )
  }

  export default Popular