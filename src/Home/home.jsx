import React, { Component } from "react";
import Navbar from "../Navbar/nav";
import style from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className={style.main}>
            <div className={style.trendpost_container}>
              <h2 className={style.heading}>Latest Posts</h2>
              {/* <div className={style.trending_post_blog}>
                <div className={style.trend_column_1}>
                  <div>
                    <div className={style.trending_post_blogItem}>
                      <div className={style.trending_post_blogItem_img}>
                        <img
                          src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg"
                          alt="postImage"
                        />
                      </div>

                      <a href="https://www.google.com/">
                        <div></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={style.trend_column_2}>
                  <div className={style.Trending_post_blogWrap}>
                    <div className={style.trending_post_blogItem}>
                      <div className={style.trending_post_blogItem_img}>
                        <img
                          src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg"
                          alt="postImage"
                        />
                      </div>

                      <a href="https://www.google.com/">
                        <div></div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className={style.trending_post_blogItem}>
                      <div className={style.trending_post_blogItem_img}>
                        <img
                          src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg"
                          alt="postImage"
                        />
                      </div>

                      <a href="https://www.google.com/">
                        <div></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className={style.categories_container}>
                <i
                  class="fa fa-filter"
                  style={{ "font-size": "16px", color: "#4072bd" }}
                ></i>
                <span className={style.filter_text}> Filter by Category</span>
                <div className={style.categories_list}>
                  <a className={style.active_category_btn} href="">
                    All
                  </a>
                  <a className={style.category_item} href="">
                    Artificial Intelligence
                  </a>
                  <a className={style.category_item} href="">
                    Cloud Computing
                  </a>
                  <a className={style.category_item} href="">
                    DevOps
                  </a>
                  <a className={style.category_item} href="">
                    Programming Languages
                  </a>
                  <a className={style.category_item} href="">
                    Mobile Application Development
                  </a>
                  <a className={style.category_item} href="">
                    Technology and Tools
                  </a>
                  <a className={style.category_item} href="">
                    Get a job in a Tech Company
                  </a>
                  <a className={style.category_item} href="">
                    Others
                  </a>
                </div>
              </div>
            </div>

            {/* cards */}
            <div card={style.card_1}>
              <div className={style.card_data}>
                <div className={style.card_container}>
                  <a href="#">
                    <div className={style.card_header}>
                      <img
                        class={style.card_img}
                        src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
                        alt="Machine learning"
                      />
                    </div>
                    <div class={style.card_body}>
                      <div class={style.card_content}>
                        <p class={style.card_title}>
                          Challenge of Machine Le...
                        </p>
                        <p class={style.author_section}>
                          <span class={style.card_author}>Edyoda</span>
                          <span className={style.card_date}>| 03 Aug 2020</span>
                        </p>
                        <p className={style.card_descripion}>
                          Machine Learning is a subset of artificial
                          intelligence which is an important part of computer
                          science The revolution of Big Data promises to
                          transform the way we work live and.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={style.card_container}>
                  <a href="#">
                    <div className={style.card_header}>
                      <img
                        class={style.card_img}
                        src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
                        alt="Machine learning"
                      />
                    </div>
                    <div class={style.card_body}>
                      <div class={style.card_content}>
                        <p class={style.card_title}>
                          Breaking the Myths around cybersecurity
                        </p>
                        <p class={style.author_section}>
                          <span class={style.card_author}>Infosys</span>
                          <span className={style.card_date}>| 01 Aug 2021</span>
                        </p>
                        <p className={style.card_descripion}>
                          Cybersecurity plays an integral role in the process of
                          good business models. But event cryptosecurity
                          programs built with good intentions can fail short in
                          front of advanced cyber attacking.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={style.card_container}>
                  <a href="#">
                    <div className={style.card_header}>
                      <img
                        class={style.card_img}
                        src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
                        alt="Machine learning"
                      />
                    </div>
                    <div class={style.card_body}>
                      <div class={style.card_content}>
                        <p class={style.card_title}>
                          Importance of Data Backu...
                        </p>
                        <p class={style.author_section}>
                          <span class={style.card_author}>
                            <i>Bracky</i>
                          </span>
                          <span className={style.card_date}>| 12 Oct 2019</span>
                        </p>
                        <p className={style.card_descripion}>
                          A business must always introspect the areas where they
                          lack in order to bring about a positive changes in the
                          work environment. One of the main precautionsor a
                          contingency plan the..
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={style.card_container}>
                  <a href="#">
                    <div className={style.card_header}>
                      <img
                        class={style.card_img}
                        src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"
                        alt="Machine learning"
                      />
                    </div>
                    <div class={style.card_body}>
                      <div class={style.card_content}>
                        <p class={style.card_title}>What is Web Scraping?</p>
                        <p class={style.author_section}>
                          <span class={style.card_author}>
                            <i>Zac Clancy</i>
                          </span>
                          <span className={style.card_date}>|20 Nov 2022</span>
                        </p>
                        <p className={style.card_descripion}>
                          A simply put, web Scraping is one of the tools
                          developers use to gather and analyze information form
                          the internet some websites and platforms offer
                          application programming interface.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={style.card_container}>
                  <a href="#">
                    <div className={style.card_header}>
                      <img
                        class={style.card_img}
                        src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"
                        alt="Machine learning"
                      />
                    </div>
                    <div class={style.card_body}>
                      <div class={style.card_content}>
                        <p class={style.card_title}>
                          What is income share Aggrement?
                        </p>
                        <p class={style.author_section}>
                          <span class={style.card_author}>
                            <i>Julia carter</i>
                          </span>
                          <span className={style.card_date}>| 23 Nov 2022</span>
                        </p>
                        <p className={style.card_descripion}>
                          The term income share Aggrement has been around for a
                          long time since 1955to be practice. Suprised eh? it
                          was first introduced by Mitton Firedman, an American
                          economist...
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={style.card_container}>
                  <a href="#">
                    <div className={style.card_header}>
                      <img
                        class={style.card_img}
                        src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"
                        alt="Machine learning"
                      />
                    </div>
                    <div class={style.card_body}>
                      <div class={style.card_content}>
                        <p class={style.card_title}>
                          Practical Machine Learning with Python and Keras
                        </p>
                        <p class={style.author_section}>
                          <span class={style.card_author}>
                            <i>Danieal</i>
                          </span>
                          <span className={style.card_date}>|16 Oct 2019</span>
                        </p>
                        <p className={style.card_descripion}>
                          Machine Learning is a field of artificial intelligence
                          that uses statistical techniques to give computer
                          systems the ablity to "learn" e.g progressively
                          improve performance on a specfic...
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
