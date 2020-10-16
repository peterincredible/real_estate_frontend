import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import Banner from "./banner";
import news_img1 from "../img/blog/1.jpg";
import news_img2 from "../img/blog/2.jpg";
import news_img3 from "../img/blog/3.jpg";
import news_img4 from "../img/blog/4.jpg";
import news_img5 from "../img/blog/2.jpg";

function News(){
    return (
        <Fragment>
            <Banner/>
            <div className="row mx-0" style={{backgroundColor:"#f2f3f4"}}>
                <div className="col-sm-11 col-md-11 col-lg-8 m-auto ls-container pt-5">
                        <ul className="news-links">
                            <li className="link-item"><Link to="#" className="link">Areas</Link></li>
                            <li className="link-item"><Link to="#" className="link">Architecture</Link></li>
                            <li className="link-item"><Link to="#" className="link">In Progress</Link></li>
                            <li className="link-item"><Link to="#" className="link">Design</Link></li>
                        </ul>
                    <div className="search-container">
                            <input type="text" placeholder="Search in News Articles"/>
                            <button><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="col-sm-11 col-md-11 col-lg-8 m-auto pt-5">
                        <div className="news-container">
                                <img src={news_img1} alt="no img"/>
                                <div className="news-content">
                                    <span className="date">25 January 2019</span>
                                    <span className="ml-2" style={{backgroundColor:"#12c7b8",color:"#fff",padding:"0.1rem 0.5rem"}}>Featured</span>
                                    <h5>DONEC HENDRERIT ID LECTUS VEL VEHICULA</h5>
                                    <p>In vel dignissim tellus, a ultrices magna. Curabitur dignissim fringilla 
                                        felis sed vulputate. Donec fringilla massa enim, ut sodales massa 
                                        venenatis eget. Nunc et orci libero. Aliquam sodales felis nunc, vitae 
                                        varius nunc tristique non. Sed id fringil-la nibh. Cras finibus, orci at 
                                        ultrices imperdiet, dui lectus lacinia nibh rcu eget tincidunt viverra. 
                                        Nullam sagittis arcu nec vulputate cursus. Quisque venenatis ultrices 
                                        vestibulum
                                    </p>
                                    <button>READ MORE</button>
                                </div>
                        </div>
                        <div className="news-container mt-4">
                                <img src={news_img2} alt="no img"/>
                                <div className="news-content">
                                    <span className="date">25 January 2019</span>
                                    <h5>DONEC HENDRERIT ID LECTUS VEL VEHICULA</h5>
                                    <p>In vel dignissim tellus, a ultrices magna. Curabitur dignissim fringilla 
                                        felis sed vulputate. Donec fringilla massa enim, ut sodales massa 
                                        venenatis eget. Nunc et orci libero. Aliquam sodales felis nunc, vitae 
                                        varius nunc tristique non. Sed id fringil-la nibh. Cras finibus, orci at 
                                        ultrices imperdiet, dui lectus lacinia nibh rcu eget tincidunt viverra. 
                                        Nullam sagittis arcu nec vulputate cursus. Quisque venenatis ultrices 
                                        vestibulum
                                    </p>
                                    <button>READ MORE</button>
                                </div>
                        </div>
                        <div className="news-container mt-4">
                                <img src={news_img3} alt="no img"/>
                                <div className="news-content">
                                    <span className="date">25 January 2019</span>
                                    <h5>DONEC HENDRERIT ID LECTUS VEL VEHICULA</h5>
                                    <p>In vel dignissim tellus, a ultrices magna. Curabitur dignissim fringilla 
                                        felis sed vulputate. Donec fringilla massa enim, ut sodales massa 
                                        venenatis eget. Nunc et orci libero. Aliquam sodales felis nunc, vitae 
                                        varius nunc tristique non. Sed id fringil-la nibh. Cras finibus, orci at 
                                        ultrices imperdiet, dui lectus lacinia nibh rcu eget tincidunt viverra. 
                                        Nullam sagittis arcu nec vulputate cursus. Quisque venenatis ultrices 
                                        vestibulum
                                    </p>
                                    <button>READ MORE</button>
                                </div>
                        </div>
                        <div className="news-container mt-4">
                                <img src={news_img4} alt="no img"/>
                                <div className="news-content">
                                    <span className="date">25 January 2019</span>
                                    <h5>DONEC HENDRERIT ID LECTUS VEL VEHICULA</h5>
                                    <p>In vel dignissim tellus, a ultrices magna. Curabitur dignissim fringilla 
                                        felis sed vulputate. Donec fringilla massa enim, ut sodales massa 
                                        venenatis eget. Nunc et orci libero. Aliquam sodales felis nunc, vitae 
                                        varius nunc tristique non. Sed id fringil-la nibh. Cras finibus, orci at 
                                        ultrices imperdiet, dui lectus lacinia nibh rcu eget tincidunt viverra. 
                                        Nullam sagittis arcu nec vulputate cursus. Quisque venenatis ultrices 
                                        vestibulum
                                    </p>
                                    <button>READ MORE</button>
                                </div>
                        </div>
                        <div className="news-container mt-4">
                                <img src={news_img5} alt="no img"/>
                                <div className="news-content">
                                    <span className="date">25 January 2019</span>
                                    <h5>DONEC HENDRERIT ID LECTUS VEL VEHICULA</h5>
                                    <p>In vel dignissim tellus, a ultrices magna. Curabitur dignissim fringilla 
                                        felis sed vulputate. Donec fringilla massa enim, ut sodales massa 
                                        venenatis eget. Nunc et orci libero. Aliquam sodales felis nunc, vitae 
                                        varius nunc tristique non. Sed id fringil-la nibh. Cras finibus, orci at 
                                        ultrices imperdiet, dui lectus lacinia nibh rcu eget tincidunt viverra. 
                                        Nullam sagittis arcu nec vulputate cursus. Quisque venenatis ultrices 
                                        vestibulum
                                    </p>
                                    <button>READ MORE</button>
                                </div>
                        </div>
                        
                </div>
                <div className="col-sm-11 col-md-11 col-lg-8 m-auto d-flex justify-content-center py-5">
                    <Link to="#" style={{backgroundColor:"#12c7b8",color:"#fff",padding:"0.7rem 0.7rem",fontWeight:700}}>LOAD MORE</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default News;