import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CCRightMenu from '../Components/CCRightMenu'
import CCHeader from '../Components/CCHeader'
import LeftMenu from '../Components/LeftMenu'
import FilterListIcon from '@material-ui/icons/FilterList';
import InfoIcon from '@material-ui/icons/Info';

const BrainTeasers = () => { 
    return (
        <GrandContainer>
            <MobContainer>
                We are still working on Responsive Version of the website, please view the site with 
                width more than 1100px, a standard laptop or tablet landscape. 
                <img src="https://media4.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" alt="" />
            </MobContainer>
            <Container>
                <CCHeader />
                <LeftMenu marked={"brain-teasers"} />
                <div className="cc-middle-content">
                    <h1 className='main-heading'>Brain Teasers</h1>
                    <p className="heading-supporter">
                    Why Do Companies Ask Brainteaser Questions?
                    Interviewers ask brainteaser questions because they think your ability to answer will provide some indication of your ability to do the job. Often, the hiring manager feels the brainteaser will help them to evaluate your strength in one or more of the following competency areas :
                    Problem solving, Critical thinking, Analytic skills, Creativity and Ability to think on your feet.
                    </p>
                    <div className="message">
                        <div className="icon"></div>
                        <div className="text">
                            Want to contribute a Brain Teaser or have any suggestion about the website <a href="/">click here</a>
                        </div> 
                    </div> 
                    {/* <iframe width="220" height="400" src="https://www.youtube.com/embed/XF4l1T8kLUo" title="Puzzles for Software Engineers | Amazon #4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                    <div className="questions">
                      <div className="ques-box">
                        <div className="q-elem"><div className="q-num">1</div> <div className="q-text">You have a three-gallon bucket and a five-gallon bucket. How do you measure out exactly four gallons?</div></div>
                        <div className="q-tags"><div className="q-tag">Closed Ended</div><div className="q-tag">Microsoft</div></div>
                        <div className="ans">
                        <b>Answer : </b>
                        The three-gallon bucket is too small, and the five-gallon bucket is too large. This is a given fact, and along with it comes the assumption that our final four gallons will end up in the five-gallon bucket. <GapLine/>
                        The first step is to fill the three-gallon bucket. Then, pour all three gallons into the five-gallon bucket. Now the five-gallon bucket has three gallons in it, and the three-gallon bucket is empty. <GapLine/>
                        Because 5-3=2, we know that only two more gallons can fit into the five-gallon bucket before it is full. So we’d fill the three-gallon bucket again and slowly pour it into the five-gallon bucket until it’s full. 3-2=1, so there is one gallon in the three-gallon bucket. <GapLine/>
                        We dump out the five-gallon bucket completely, then pour the one gallon into it. Finally, we fill up the three-gallon bucket and pour it into the five-gallon bucket. We end up with precisely four gallons. <br />
                        </div>
                      </div>

                      <div className="ques-box">
                        <div className="q-elem"><div className="q-num">2</div> <div className="q-text">The Beatles need to cross a bridge at night to get to a concert. They only have one flashlight, and they have seventeen minutes to get there. The bridge must be crossed with the flashlight and can only support two people at a time. John can cross in one minute, Paul can cross in two minutes, George can cross in five minutes, and Ringo takes ten minutes to cross. How can they all make it to the concert on time?</div></div>
                        <div className="q-tags"><div className="q-tag">Closed Ended</div><div className="q-tag">Google</div><div className="q-tag">HR Round</div></div>
                        <div className="ans">
                        <b>Answer : </b>
                        First, John takes the flashlight and crosses the bridge with Paul. This takes two minutes. John then returns across the bridge with the flashlight taking one more minute (three minutes have passed so far). John gives the flashlight to George, and George and Ringo cross together, taking ten minutes (thirteen minutes have passed so far). <GapLine/>
                        George gives the flashlight to Paul, who recrosses the bridge taking two minutes (fifteen minutes have passed at this point). John and Paul now cross the bridge together, taking two more minutes. All end up across the bridge at the concert in exactly seventeen minutes. <GapLine/>
                        </div>
                      </div>
                    </div>
                </div>
            </Container>
        </GrandContainer>
    )
}

export default BrainTeasers

const GrandContainer = styled.div`

`

const MobContainer = styled.div`
  width: 100vw;
  padding: 40px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;

  img{
    width: calc(100% - 80px);
    margin: 40px;
    border-radius: 5px;
    display: block;
  }

  @media only screen and (min-width: 1099px){
    display: none;
  }
`


const Container = styled.div`
    @media only screen and (max-width: 1099px){
        display: none;
    }

    display: flex;
    justify-content: space-between;
    padding-left: 200px;

    a{
      color: #18489f;
    }

    .cc-middle-content{
      min-height: 100vh;
      width: 100%;
      /* padding: 80px min(120px, 5vw) 50px min(120px, 5vw); */
      padding: 80px 120px 50px 120px;
      position: relative;
      width: 100%;
      max-width: 1360px;
      min-width: 850px;
      margin: auto;
      
      @media only screen and (max-width: 1200px){
        padding: 80px 50px 50px 50px;
      }   

      .main-heading{
          font-size: 1.65rem;
          font-weight: 600;
          color: #292929;
      }

      .heading-supporter{
          font-size: 1.05rem;
          margin-bottom: 10px;
          font-weight: 400;
          color: #696168;

          a{
            color: #18489f;
            font-size: 0.95rem;
            font-weight: 300;
            margin-left: 0.25rem;
          }
      }

      .message{
        display: inline-block;
        /* display: flex; */
        /* align-items: center; */
        background-color: #d5f7e1;
        border-radius: 5px;
        padding: 10px;
        margin: 20px 0 10px 0;

        .text{
            font-size: 0.8rem;
            color: #13803b;
            font-weight: 300;
            
        }
      }

      iframe{
        border-radius: 5px;
        border: none;
      }

      .questions{
        margin-top: 75px;

        .ques-box{
          width: max(860px, 60vw);
          max-width: 1200px;
          padding: 20px;
          /* background-color: white; */
          border-bottom: 1px solid #e5e7ed;
          /* border-radius: 10px; */
          margin-bottom: 50px;
        

          .q-elem{
            display: flex;
            align-items: flex-start;
            position: relative;
  
            .q-num{
              position: absolute;
              left: -1.75rem;
              font-size: 0.95rem;
              background-color: #70a936;
              height: 1.15rem;
              width: 1.15rem;
              display: grid;
              place-items: center;
              margin-right: 10px;
              color: white;
              border-radius: 4px;
              margin-top: 2.5px;
              font-family: sohne-var, "Helvetica Neue", Arial, sans-serif;
            }
            .q-text{
              font-size: 1rem;
              width: calc(100% - 1.75rem);
              line-height: 1.75rem;
            }
          }
  
          .q-tags{
              display: flex;
              flex-wrap: wrap;
              margin: 30px 0 20px 0;
  
              .q-tag{
                  font-size: 0.75rem;
                  padding: 5px 15px;
                  border-radius: 100px;
                  background-color: #e5e5e5;
                  font-weight: 300;
                  margin: 5px 5px 0 0;
              }
          }
  
          .ans{
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.75rem;
            color: #686169;

            b{
              color: #222;
              font-weight: 500;
            }
          }
        }
      }
    }
`

const GapLine = styled.div`
  display: block;
  height: 10px;
`