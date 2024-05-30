/*import React from 'react';
function Etsy()
{
    let cardContainer = document.getElementById('cardContainer');
let cards = Array.from(document.getElementsByClassName('card'));
let cardHeight = cards[0].offsetHeight + 20; // 20 is margin
let interval;
let stopMovement = false;

cards.forEach((card, index) => {
    card.style.top = `${index * cardHeight}px`;
    
    card.addEventListener('mouseenter', () => {
        stopMovement = true;
    });
    
    card.addEventListener('mouseleave', () => {
        stopMovement = false;
    });
});

function moveCards() {
    if (stopMovement) return;
    
    cards.forEach((card, index) => {
        let top = parseInt(card.style.top, 10);
        top -= 1;
        
        if (top < -cardHeight) {
            top = (cards.length - 1) * cardHeight;
            cardContainer.appendChild(card);
            cards = Array.from(document.getElementsByClassName('card'));
        }
        
        card.style.top = `${top}px`;
    });
}

interval = setInterval(moveCards, 20);

    return(
        <div>
            <div className='search bar' >
                <h1 style={{color:'orange',display:'inline-block',marginRight:'20px',marginLeft:'90px'}}>Etsy</h1>
                <button className='categoriesbtn' style={{marginRight:'2px',marginLeft:'40px'}}>=</button>
                <h4 style={{display:'inline-block',margin:'10px'}}>Categories</h4>
                <input type="text" className='search' placeholder='🔍Search for anything' style={{borderRadius:'20px',width:'700px',marginRight:'10px',height:'50px',marginLeft:'20px',fontSize:'15px'}}></input>
                <h3 className='btf1'>sign in</h3>
                <h4 className='btf'>gift🎁</h4>
                <h4 className='btf'>cart🛒</h4>
                <br></br><br></br>
                <button className="btn1">Gifts</button>
                <button className='btn'>Deals</button>
                <button className='btn'>Favorites</button>
                <button className='btn'>Register</button>
                <hr></hr>
            </div>
            <div id="cardContainer">
                <div class="card">Card 1</div>
                <div class="card">Card 2</div>
                <div class="card">Card 3</div>
                <div class="card">Card 4</div>
                <div class="card">Card 5</div>
             </div>
        </div>
    );
}
export default Etsy;*/


/*import React, { useEffect } from 'react';

function Etsy() {
    useEffect(() => {
        const cardContainer = document.getElementById('cardContainer');
        const cards = Array.from(document.getElementsByClassName('card'));
        const cardHeight = cards[0].offsetHeight + 20; // 20 is margin
        let interval;
        let stopMovement = false;

        cards.forEach((card, index) => {
            card.style.top = `${index * cardHeight}px`;

            card.addEventListener('mouseenter', () => {
                stopMovement = true;
            });

            card.addEventListener('mouseleave', () => {
                stopMovement = false;
            });
        });

        function moveCards() {
            if (stopMovement) return;

            cards.forEach((card) => {
                let top = parseInt(card.style.top, 10);
                top -= 1;

                if (top < -cardHeight) {
                    top = (cards.length - 1) * cardHeight;
                    cardContainer.appendChild(card);
                    cards.push(cards.shift());
                }

                card.style.top = `${top}px`;
            });
        }

        interval = setInterval(moveCards, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='search bar'>
                <h1 style={{ color: 'orange', display: 'inline-block', marginRight: '20px', marginLeft: '90px' }}>Etsy</h1>
                <button className='categoriesbtn' style={{ marginRight: '2px', marginLeft: '40px' }}>=</button>
                <h4 style={{ display: 'inline-block', margin: '10px' }}>Categories</h4>
                <input type="text" className='search' placeholder='🔍Search for anything' style={{ borderRadius: '20px', width: '700px', marginRight: '10px', height: '50px', marginLeft: '20px', fontSize: '15px' }}></input>
                <h3 className='btf1'>sign in</h3>
                <h4 className='btf'>gift🎁</h4>
                <h4 className='btf'>cart🛒</h4>
                <br /><br />
                <button className="btn1">Gifts</button>
                <button className='btn'>Deals</button>
                <button className='btn'>Favorites</button>
                <button className='btn'>Register</button>
                <hr />
            </div>
            <div id="cardContainer">
                <div className="card">Card 1</div>
                <div className="card">Card 2</div>
                <div className="card">Card 3</div>
            </div>
            
        </div>
    );
}

export default Etsy;*/
import React,{useEffect} from 'react';

function Etsy() {
   /* useEffect(() => {
        function initCardMovement(cards, direction) {
            const cardHeight = cards[0].offsetHeight + 20; // 20 is margin
            let interval;
            let stopMovement = false;

            cards.forEach((card, index) => {
                card.style.top = `${index * cardHeight}px`;

                card.addEventListener('mouseenter', () => {
                    stopMovement = true;
                });

                card.addEventListener('mouseleave', () => {
                    stopMovement = false;
                });
            });

            function moveCards() {
                if (stopMovement) return;

                cards.forEach((card) => {
                    let top = parseInt(card.style.top, 10);
                    top += direction === 'up' ? -1 : 1;

                    if (top < -cardHeight) {
                        top = (cards.length - 1) * cardHeight;
                        card.parentElement.appendChild(card);
                        cards.push(cards.shift());
                    } else if (top > (cards.length - 1) * cardHeight) {
                        top = -cardHeight;
                        card.parentElement.prepend(card);
                        cards.unshift(cards.pop());
                    }

                    card.style.top = `${top}px`;
                });
            }

            interval = setInterval(moveCards, 20);

            return () => clearInterval(interval);
        }

        const cardsUp = Array.from(document.getElementsByClassName('card-up'));
        const cardsDown = Array.from(document.getElementsByClassName('card-down'));

        initCardMovement(cardsUp, 'up');
        initCardMovement(cardsDown, 'down');
    }, []);*/

    return (
        <div>
            <div className='search bar'>
                <h1 style={{ color: 'orange', display: 'inline-block', marginLeft: '60px' }}>Etsy</h1>
                <button className='categoriesbtn' style={{ marginRight: '2px', marginLeft: '35px',backgroundColor:'white',border:'none',height:'30px' }}>=</button>
                <h3 style={{ display: 'inline-block' }}>Categories</h3>
                <input type="text" className='search' placeholder='🔍Search for anything' style={{ borderRadius: '20px', width: '750px', marginRight: '10px', height: '50px', marginLeft: '20px', fontSize: '15px' }}></input>
                <h3 className='btf1'>sign in👤</h3>
                <h4 className='btf'>gift🎁</h4>
                <h4 className='btf'>cart🛒</h4>
                <h4 className='btf'>home🏠</h4>
                <br></br>
                <button className="btn1">Gifts</button>
                <button className='btn'>Deals</button>
                <button className='btn'>Favorites</button>
                <button className='btn'>Register</button>
                <br></br>
                <hr />
            </div>
            {/*<div className='slide'>
            <h1 style={{marginRight:'200px',color:'orange',textAlign:'center'}}>Extra Special Gifting Made Easy</h1>
            <div id="cardContainer">
                <div className="card-column">
                    <div className="card card-up">Greetings and cards<img style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyjHRHoB78YzNDW4PYnR9bDcfpxMKNezDlQ&s"></img></div>
                    <div className="card card-up">Card 2<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyjHRHoB78YzNDW4PYnR9bDcfpxMKNezDlQ&s"></img></div>
                    <div className="card card-up">Card 3</div>
                </div>
                <div className="card-column">
                    <div className="card card-down">Card 4</div>
                    <div className="card card-down">Card 5</div>
                    <div className="card card-down">Card 6</div>
                </div>
                <br></br>
                <br></br>
    </div></div>*/}
    <div className='imgcard'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgG7g2S1j3YCfCEiUJn8IUng1dpIcrI3YOA&s"></img>
      <h1 style={{ marginRight: '190px', color: 'orange', textAlign: 'center' }}>
        Extra Special Gifting Made Easy
      </h1>
  
    </div>

            <div className='second'>
                <h1 style={{textAlign:'center',fontFamily:'revert'}}>Small Shops Make Every Moment Special</h1>
                <img className='imgs' style={{border:'1px solid grey',borderRadius:'50%',width:'150px',height:'150px',marginLeft:'200px',transition: 'transform .2s'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdU7w7uocbeit2HpZ6YM1ZNCgzf9CpENubaA&s"></img>
                <img className='imgs' style={{border:'1px solid grey',borderRadius:'50%',width:'150px',height:'150px',marginLeft:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyjHRHoB78YzNDW4PYnR9bDcfpxMKNezDlQ&s"></img>
                <img className='imgs' style={{border:'1px solid grey',borderRadius:'50%',width:'150px',height:'150px',marginLeft:'30px'}} src="https://i.etsystatic.com/25021840/c/1276/1276/81/174/il/939bbe/4759659821/il_300x300.4759659821_cvqe.jpg"></img>
                <img className='imgs' style={{border:'1px solid grey',borderRadius:'50%',width:'150px',height:'150px',marginLeft:'30px'}} src="https://i.etsystatic.com/8154976/c/1376/1376/323/441/il/1ac661/5842079859/il_300x300.5842079859_hpa0.jpg"></img>
                <img className='imgs' style={{border:'1px solid grey',borderRadius:'50%',width:'150px',height:'150px',marginLeft:'30px'}} src="https://i.etsystatic.com/43023326/r/il/98b10f/5338068475/il_300x300.5338068475_9qeg.jpg"></img>
                <img className='imgs' style={{border:'1px solid grey',borderRadius:'50%',width:'150px',height:'150px',marginLeft:'30px'}} src="https://i.etsystatic.com/13722199/r/il/291260/5559365546/il_300x300.5559365546_ru1a.jpg"></img>
                <h4 className='sub' style={{marginLeft:'250px',transition: 'transform .2s',display:'inline-block'}}>Gifts</h4>
                <h4 className='sub' style={{marginLeft:'120px',display:'inline-block'}}>Greeting cards</h4>
                <h4 className='sub' style={{marginLeft:'100px',display:'inline-block'}}>Barware</h4>
                <h4 className='sub' style={{marginLeft:'120px',display:'inline-block'}}>Clothings</h4>
                <h4 className='sub' style={{marginLeft:'135px',display:'inline-block'}}>Kids</h4>
                <h4 className='sub' style={{marginLeft:'150px',display:'inline-block'}}>Deals</h4>
                <br>
                </br>
                <br></br>
            </div>
            <div className='mid'>
                            <div className='c1'>
                    <img src='https://i.etsystatic.com/inv/1b86b2/5514321927/inv_425x340.5514321927_50cniifw.jpg?version=0'></img>
                </div>
                <div className='c2'>
                    <img src='https://i.etsystatic.com/inv/0c0724/5507381345/inv_425x340.5507381345_8imomvyj.jpg?version=0'></img>
                </div>
                       <div class='text-content'>
            <h1>Discover Shops In India</h1>
            <button class='shop'>Shop from local marketers</button>
        </div>

    </div>


            <div className='btm'>
                <h1 style={{textAlign:'center',fontFamily:'revert'}}>What is Etsy ?</h1>
                <p style={{textAlign:'center',fontFamily:'revert',marginLeft:'100px',marginRight:'100px',fontSize:'20px'}}>Etsy is a global marketplace for creative and one-of-a-kind goods. It’s home to a universe of special, extraordinary items, from unique home decor pieces to trending fashion finds. Founded in 2005, Etsy began its Indian journey in 2018.

Etsy is a place where creativity lives and thrives because it’s powered by people just like you. We help our community of 5.9 million active sellers worldwide turn their ideas into successful small businesses. Our platform connects them with 89.9 million active buyers looking for something special that enables them to express their unique identity.</p>
                <h1 style={{textAlign:'center',fontFamily:'revert'}}>Why Choose Etsy ?</h1>
                <p style={{textAlign:'center',fontFamily:'revert',marginLeft:'100px',marginRight:'100px',fontSize:'20px'}}>Etsy is where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together:

Your purchases on Etsy in 2021 generated nearly $4 billion in income for small businesses.

We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.

We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.</p>
<h1 style={{textAlign:'center',fontFamily:'revert'}}>How To Sell On Etsy ?</h1>
            <p style={{textAlign:'center',fontFamily:'revert',marginLeft:'100px',marginRight:'100px',fontSize:'20px'}}>You can sell handmade goods, vintage items, and craft supplies on Etsy. With low fees, powerful tools, and support and education, we help creative entrepreneurs start, manage, and scale their businesses. Want to open a shop? All it takes is Rs. 16* to start selling on Etsy.

*Listing fees are billed for 0.20 USD, so if your bank's currency is not USD, the amount in your currency may vary based on changes in the exchange rate.</p>
            </div>
        </div>
    );
}

export default Etsy;
