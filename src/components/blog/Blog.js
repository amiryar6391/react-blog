import './Blog.css'
import Cardblog from './Cardblog'
import postimg1 from '../../aseete/image/post-1.jpg'
import postimg2 from '../../aseete/image/post-2.jpg'
import postimg3 from '../../aseete/image/post-3.jpg'

function Blog(){
    let blogs=[
        {nametitle:'post title 1' , imgblog:postimg1 , nameblog:'amir yar'},
        {nametitle:'post title 2' , imgblog: postimg2, nameblog:'zohre momeni'},
        {nametitle:'post title 3' , imgblog:postimg3 ,  nameblog:'yasin yar'}
    ]
    return(
      <section id="blog">
        <div className="container">
            <div className="section-info">
              <h2 className="section-title">BLOG</h2>
              <p className="section-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="row">
              <Cardblog {...blogs[0]}/>
              <Cardblog  {...blogs[1]}/>
              <Cardblog {...blogs[2]}/>

          
            </div>
        </div>  
      </section>

    )
}
export default Blog
