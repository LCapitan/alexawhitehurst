import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './styles.scss'
import {Parallax} from "react-scroll-parallax";

class About extends Component {
    render() {
        return (
            <Route>
                <div className="Tier">
                    <section className="TierHero">
                        <Parallax className="ParallaxWrapper" x={[20, -20]} tagOuter="span">
                            <div className="AboutHero">
                                <figure></figure>
                            </div>
                        </Parallax>

                        <Parallax className="ParallaxWrapper" y={[-30, 50]} tagOuter="span">
                            <div className="TierHeroContent">
                                <h1>Biography</h1>
                                <p><em>"When you don't dress like everyone else, you don't have to think like everyone else."</em></p>
                                <p className="QuoteAuthor">- Iris Apfel</p>
                            </div>
                        </Parallax>
                    </section>

                    <div className="TierSections">
                        <section className="TierSectionTwoCol">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[-10, 10]} tagOuter="span">
                                    <figure className="EarlyLife"></figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[20, -20]} tagOuter="span">
                                <div>
                                    <div className="TierSectionsContent">
                                        <h2>Early Life</h2>
                                        <p>Now that I look back, I image I started my styling ideas as early as age three while playing with Barbie dolls. It would literally take me one hour just to get all my dolls in the right outfit before I would even consider beginning to play with them. My mother would always be the person that I would want to play with, even though she would usually have to end up telling me to hurry up to get everyone dressed so we could start. I distinctly remember her saying,“To be continued,” as I would take so long. As you can see, I’ve always been a perfectionist, but it’s safe to say that the tiny plastic shoes and detailed sequined dresses are what really caught my attention. Everything, and I mean everything, had to be just right from head to toe.</p>
                                    </div>
                                </div>
                            </Parallax>
                        </section>

                        <section className="CenterContent">
                            <div className="ImgBg">
                                <figure className="Runway"></figure>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[30, -20]} tagOuter="span">
                                <div className="CenterContentWrapper">
                                    <h2>Growing Up Runway</h2>
                                    <p>As time went on, I started modeling from age 7 to 16. I spent many years with various agencies, learning the ins-and-outs of the runway. I remember holding a photo shoot in an alleyway of Wilmington Delaware in the freezing cold. I had to make it look like I wasn’t bothered by the temperature at all. Till this day, Its still one of my favorite photo shoots! No pain, no gain. Once I got the experience and training I needed, I went to New York for a week and was seen at casting calls with modeling agencies such as <a className="Link" href="https://www.elitemodel.com/" target="_blank">Elite Model Management</a>, <a className="Link" href="https://www.fordmodels.com/" target="_blank">Ford Models</a>, and <a className="Link" href="https://www.wilhelmina.com/" target="_blank">Wilhelmina models</a>. I gradually recognized that nothing great comes easy, and although I had a love for cameras and make up, I was infatuated with getting dressed and styling my outfits with luxurious clothing a lot more. “There’s nothing like the feeling of a cashmere coat, lined in silk, sliding over your shoulders, and the sound of zipping up a pair of knee-high leather boots.”</p>
                                </div>
                            </Parallax>
                        </section>

                        <section className="TierSectionTwoCol Flip">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[10, -10]} tagOuter="span">
                                    <figure className="CollegeLife"></figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[30, -20]} tagOuter="span">
                                <div className="TierSectionsContent">
                                    <h2>College Life</h2>
                                    <p>From the beginning, I knew that the fashion industry can be a make it or break it field, but I also knew that with my talent, art skills, drive, and work ethic, I was up for the challenge. After researching the top Design Colleges in the country for fashion design on <a className="Link" href="https://www.businessoffashion.com/education/best-schools/undergraduate/fashion-design/" target="_blank">businessoffashion.com</a> I found that Drexel University was the perfect fit for a small-town girl from Dover DE to transition into the city of Philadelphia with the goal of then thrusting me into NYC fashion. During my four years at Drexel University, I spent the majority of my time in the studio of <a className="Link" href="https://drexel.edu/westphal/academics/undergraduate/FASH/" target="_blank">Antoinette Westphal</a>, sketching, pattern-making, and sewing whatever came to my mind.</p>
                                </div>
                            </Parallax>
                        </section>

                        <section className="TierSectionTwoCol">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[-10, 10]} tagOuter="span">
                                    <figure className="NYC"></figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[30, -20]} tagOuter="span">
                                <div className="TierSectionsContent">
                                    <h2>NYC Exposure</h2>
                                    <p>Midway through my education, I was offered an internship at Michael Kors for six months joining the handbag design team in creating exclusive handbags for the upcoming year. My dedication and persistence quickly accelerated me into becoming a personal assistant for the creative director of accessories at MK. While I was working with him during the day creating inspiration, I still made sure that I kept my focus on the project that I was assigned to at the beginning of my hire by one of the Handbag Designers. On the last day of my internship, I presented my ideas and right before saying goodbye, I was awarded “Best Handbag Design by an Intern” What an experience and honor! Although I would have loved to stay, I had 2 more years of studying to do before I could receive my diploma. After returning to Philadelphia, I was awarded the <a className="Link" href="https://drexel.edu/westphal/news-events/news/2009/June/2009-06-20_Charles_Evans_Fashion_Library/" target="_blank">Charles Evans Scholarship Award</a> as a reward for an outstanding portfolio. The sleepless nights and the trips to the local 7-11 at 3am for a quick energy drink had thankfully paid off.</p>
                                </div>
                            </Parallax>
                        </section>

                        <section className="TierSectionTwoCol Flip">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[10, -10]} tagOuter="span">
                                    <figure className="Inspiration"></figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[30, -20]} tagOuter="span">
                                <div className="TierSectionsContent">
                                    <h2>Inspiration</h2>
                                    <p>With 6 months to go before graduating, I began my senior collection, “Buckle Up” inspired by my step father Charles E. Whitehurst who had recently passed away. Charles, AKA, Chuckles left my world too quickly, but before his passing in 2015, he left me with great advice, insight, and the support I needed to help me get my future started. My Chuckles took me to Saks and other luxury retail stores, to teach me the feel and the meaning behind the highest quality of clothing. He taught me how the world works, and how to love people, but most of all, he taught me how to never give up and to always meet my highest potential. I cherished these values that I received from him, and I wanted to show my appreciation through my work.</p>
                                </div>
                            </Parallax>
                        </section>

                        <section className="CenterContent TwoCol">
                            <div className="ImgBg">
                                <figure className="Graduation"></figure>
                            </div>
                            <Parallax className="ParallaxWrapper" y={[30, -20]} tagOuter="span">
                                <div className="CenterContentWrapper">
                                    <h2>Graduation</h2>
                                    <div className="TwoColContent">
                                        <div>
                                            After graduation, I spent time building my portfolio and then quickly landed a few freelance jobs at corporate headquarters such as Madewell and Coach. Although I loved both companies, freelance jobs are only temporary. I wanted to take some time to learn more about different luxury brands, price points, and the different finishes of fabrics. Thats exactly what I did. I held styling appointments with celebrities such as Maria Carey, Kris Jenner, Dorinda Medley, Cynthia Germanotta and many more. Right away, it felt like a dream; I was making others happy by providing them with a selection of clothing that made them feel great. So at this time, my life came full circle. Instead of pairing tiny plastic shoes and sequined dresses together, I was now pairing a Louis Vuitton dress with a Chanel bag at the very place my step father always thought I would do great, Saks Fifth Avenue, New York.
                                        </div>
                                        <div>
                                            After spending a year at Saks, I met a lot of great people and was blessed with many opportunities. I wanted to continue to network under the same roof, but also showcase my creative and technical design skills that I worked so hard for in college. I introduced myself to the Director of Alterations, Sabina Sadykova. Sabina started me out as the alterations coordinator where I got to examine and document all incoming alteration garments for accurate pinning and sewing instructions. After shadowing next to some of New York’s most talents seamstresses, I was promoted to becoming a fitter. This was the perfect way for me to be around the clothing, build relationships with clients, and still be able to give back to others with my knowledge of garment construction to those that didn’t know how it works.
                                        </div>
                                    </div>
                                </div>
                            </Parallax>
                        </section>

                        <section className="TierSectionTwoCol Flip">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[10, -10]} tagOuter="span">
                                    <figure className="WhereNow"></figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[30, -20]} tagOuter="span">
                                <div className="TierSectionsContent">
                                    <h2>Where is She Now?</h2>
                                    <p>The most beautiful part of New York is standing back at the New Jersey Pier where you see the skyline of the various displays of architectural buildings filled with talented people working towards their dreams. Although this was an amazing experience for me, I started to realize that I didn’t want to enjoy all of my life experiences if I couldn’t share it with the most important people in my life. Friends come and go, but family is forever. I now reside in Delray Beach, Florida close to my mom and sister, where I am continuously working on my next step in the fashion industry.</p>
                                </div>
                            </Parallax>
                        </section>
                    </div>
                </div>
            </Route>
        );
    }
}

export default About;