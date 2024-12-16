import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import Slider from '../Slider';
import BackgroundSection from '../Backgroundpart ';
import IntroductionSection from '../IntroductionSection ';
import BoxPleft from '../BoxPleft';
function Cafe() {
    const images = [
      process.env.PUBLIC_URL +'/image/cafe1.png',
      process.env.PUBLIC_URL +'/image/cafe2.png',
      process.env.PUBLIC_URL +'/image/cafe3.png',
      process.env.PUBLIC_URL +'/image/cafe4.png',
      process.env.PUBLIC_URL +'/image/cafe5.png',
      process.env.PUBLIC_URL +'/image/cafe6.png'
      ];
    
     
    
      
    return (
        <div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%',backgroundColor:'#f8f4e1' }}>
        
        <BackgroundSection image="./image/cafe.png" />       
            
            <SlideMenu />
            <IntroductionSection
            title1="Twinflower"
            title2="Café"
            subtitle1="FUEL FOR YOUR"
            subtitle2="WELLNESS JOURNEY"
            hours="MONDAY–SUNDAY, 7 A.M. TO 2 P.M."
            service="OFFERING COUNTER-SERVICE"
            service2="BREAKFAST AND LUNCH"
            additionalInfo="The healthful dishes at Twinflower Café are crafted with the same thoughtful
            attention to detail that is evident throughout every aspect of The Longfellow experience. 
            Utilizing local ingredients whenever possible, 
            and featuring a variety of vegetarian and gluten-free options, 
            we focus on food that both delights the palate and nourishes the body."
        />
           <BoxPleft
        imageSrc="/image/cafe.png"
        title1="LOCAL COFFEE"
        title2="GLOBAL MISSION"
        description="We are proud to serve bold, richly flavored Burundi Star Coffee—whose mission goes beyond what’s 
                    in your cup. Sourcing coffee directly from her home country of Burundi, 
                    owner Jocelyne Kamikazi is helping to empower women and girls there, creating 
                    revenue for poverty-stricken areas of the country, and giving coffee farmers a voice."
        backgroundColor="#f8f4e1"
    />
            <section  className='menu' style={{ height: 'auto', width: '90%'  ,border: '2px solid black',marginBottom:'20px' ,backgroundColor:'#f8f4e1'}}> 
                <div style={{ height: 'auto', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '50px',marginBottom:'30px' }}>
                    <p style={{ fontSize: '32px' }}>Twinflower</p>
                    <p style={{ fontSize: '32px' }}>Café</p>
                    <p style={{ fontSize: '48px', marginTop: '30px' }}>SAMPLE MENU</p>
                    <p style={{ fontSize: '18px' }}>Menu elements are subject to change.</p>
                </div>
                <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '80px', borderTop: '2px solid black', borderBottom: '2px solid black', padding: '20px', width: '80%', margin: '0 auto' }}>
                    <p style={{ fontSize: '48px' }}>BREAKFAST MENU</p>
                </div>
                <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f4e1', color: '#000', textAlign: 'center', padding: '20px' }}>
      
      <div className='BREAKFAST MENU' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>MIXED BERRY BREAKFAST SMOOTHIE</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>yogurt, buttermilk, honey, mint</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>(vegan smoothie available)</p>
        </div>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>OVERNIGHT OATS</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>mixed berries, oat milk, agave, chia seeds</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>AVOCADO TOAST</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>sesame, crispy chickpea, nori, sourdough</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>GRANOLA PARFAIT</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>(vegan coconut yogurt available)</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>BREAKFAST BOWL</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>brown rice, mixed vegetables, sesame cucumber, pickled carrots, soft boiled egg, avocado crema</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>ZUCCHINI BREAD</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>pumpkin seed oil, sea salt</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>BREAKFAST SANDWICH</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>english muffin, baked egg, chicken sausage, pepper jack cheese, spicy mayo</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>PEANUT BUTTER PROTEIN BITES</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>chopped almond, chocolate, chia seed, whey protein</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>SMOKED SALMON SANDWICH</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>buttermilk english muffin, heirloom tomato, herbed cream cheese, pickled red onion</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>MUFFIN</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>daily selection</p>
        </div>

      </div>
    </div>
                <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '80px', borderTop: '2px solid black', borderBottom: '2px solid black', padding: '20px', width: '80%', margin: '0 auto' }}>
                    <p style={{ fontSize: '48px' }}>BEVERAGES</p>
                </div>
                <div style={{ fontFamily: 'Arial, sans-serif',  color: '#000', textAlign: 'center', padding: '20px' }}>
      
      <div className='BEVERAGES' style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <div style={{ flex: 1, margin: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>COFFEE</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Drip</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Cold Brew</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Espresso</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Americano</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Cortado</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Cappuccino</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Latte</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Flat White</p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Assorted Hot Teas</p>
        </div>
        
        <div style={{ flex: 1, margin: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px', }}>SPECIALTY</h2>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Chai</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Matcha</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Mocha</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <div style={{ flex: 1, margin: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>FLAVOR ADD-ONS</h2>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Vanilla</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Chocolate</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Caramel</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Amaretto</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Sugar Free Vanilla</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Sugar Free Chocolate</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Pumpkin Spice</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Brown Sugar Cinnamon</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Maple</p>
        </div>
        
        <div style={{ flex: 1, margin: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>PACKAGED</h2>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Saratoga Springs Water</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Vita-Coco Coconut Water</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Synergy Raw Kombucha</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Waterloo Sparkling Soda</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Natalie’s Orange Juice</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Harney & Sons Apple Juice</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Coca-Cola</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Olipop Soda</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Avinyo Petillant Wine</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Ramona Meyer Lemon Wine Spritz</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Orange Bike Gluten-Free Pilsner</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Sacred Profane Pale Lager</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Kit NA On Your Mark American Blonde</p>
        </div>
      </div>
      
    </div>
            </section>
            
            <Slider images={images}/>
            </div>
            <Footer />
        </div>
        
    );
}

export default Cafe;
