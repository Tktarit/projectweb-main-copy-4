import React from 'react';
import SlideMenu from '../Menu';
import Footer from '../Footer';
import Slider from '../Slider';
import BackgroundSection from '../Backgroundpart ';
import IntroductionSection from '../IntroductionSection ';
import BoxPright from '../BoxPright';
import DrinkMenu from '../DrinkMenu';
import SectionTitle from '../SectionTitle';
function Club() {
    const images = [
      process.env.PUBLIC_URL +'/image/five-of-clubs-appetizers.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-champange-toast.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-cocktails.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-martini-olives-wide.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-martini-salad-2-wide.jpg',
      process.env.PUBLIC_URL +'/image/five-of-clubs-martini-spread-2-wide.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-oysters-caviar-wide.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-paper-plane-wide.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-pate-wide.jpg',
      process.env.PUBLIC_URL + '/image/five-of-clubs-salad-wide.jpg',
        ];
        const drinks = [
            { 
                title: "VACATIONLAND REFRESHER", 
                description: "wild maine blueberry, cardamom, lemon, soda"
            },
            { 
                title: "ROSARIUM", 
                description: "green tea, tart cherry, orange blossom" 
            },
            { 
                title: "ROOM WITH A VIEW", 
                description: "seedlip grove, grapefruit, lime, soda"
            },
            { 
                title: "AMALFI FIZZ", 
                description: "coconut, lemon, rose, olive" 
            },
        ];
        const BEVERAGES = [
            { 
                title: "SPARKLING", 
                description: ["Vices & Vertus ‘Orgueil Brut’ • Sévre-et-Maine, France", "Bisol Prosecco Rosé • Veneto, Italy", "R. Dumont ‘Brut’ (.375 ml) • Aube, Champagne, France"]
            },
            { 
                title: "ROSÉ & ORANGE", 
                description: ["Figuiere Rosé • Southern Rhône, France","Krasno Orange • Goriška Brda, Slovenia" ]
            },
            { 
                title: "WHITE", 
                description: ["Il Monticello,Vermentino • Liguria, Italy", "Domaine Henry Pellé, Sauvignon Blanc • Menetou-Salon, France", "Michel Bregeon, Muscadet • Sèvre-et-Maine Loire, France", "Domaine Cheveau 'Les Grandes Bruyeres' Chardonnay • Macon-Fuissé, France","Poco a Poco, Chardonnay • Mendocino, California"]
            },
            { 
                title: "RED", 
                description: ["Thevenet ‘Pierreclos’, Gamay • Burgundy, France","Failla, Pinot Noir • Sonoma Coast, California","Vietti ‘Perbaco’, Nebbiolo • Piedmont, Italy","Le Querce Seconda, Sangiovese • Chianti Classico, Italy","Martin Ray 'Synthesis' • Cabernet Sauvignon, Napa, California" ]
            },
        ];
        

        
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%',backgroundColor:'#f8f4e1' }} >
           <BackgroundSection image='bgmain.jpg' />
           <SlideMenu />
           <IntroductionSection
            title1="FIVE OF CLUBS"
            // title2="Café"
            subtitle1="GOOD COMPANY—"
            subtitle2="AND CONVERSATION"
            hours="MONDAY–SUNDAY, 3 P.M TO 11 P.M."
            // service="OFFERING COUNTER-SERVICE"
            // service2="BREAKFAST AND LUNCH"
            additionalInfo="In the afternoons and evenings, Five of Clubs comes to life.
             Calling to mind the alluring lobby bars of New York and London, it is inspiredby the five-man
             literary society founded by Henry Wadsworth Longfellow and four of his close
              friends in Boston—who would gather on Saturdays to discuss literature
              , philosophy, and more. You’ll find Five of Clubs an inviting setting 
              to host your own deep discussions over cocktails, local beers, great wines,
               and small bites."
        />
         <BoxPright
         
        imageSrc="./image/clubs.png"
        title1="THE HEART OF THE "
        title2="LONGFELLOW"
        description="Like so many great hotel bars, Five of Clubs is the heart of The
         Longfellow—a place to savor interesting company along with a thoughtfully
          curated selection of drinks and appetizers. Designed for conversation and
           connection, it’s also welcoming to those who choose to remain alcohol-free:
            In addition to our sommelier-selected wine list, robust cocktail program,
             and offerings from local breweries, we put the same level of thought into
              our zero-proof cocktails and other non-alcoholic creations."
        backgroundColor="#f8f4e1"
    />
    <section  className='menu' style={{ height: 'auto', width: '90%'  ,border: '2px solid black',marginBottom:'20px' ,backgroundColor:'#f8f4e1',}}> 
                <div style={{ height: 'auto', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '50px',marginBottom:'30px'}}>
                    <p style={{ fontSize: '32px' }}>FIVE OF CLUBS</p>
                    <p style={{ fontSize: '48px', marginTop: '50px' }}>SAMPLE MENU</p>
                    <p style={{ fontSize: '18px' }}>Menu elements are subject to change.</p>
                </div>
                <SectionTitle title="SNACKS" />
                <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f4e1', color: '#000', textAlign: 'center', padding: '20px' }}>
      
      <div className='snacks' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}> CRISPY CHICKPEAS</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>shawarma spice</p>
        </div>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>MARINATED OLIVES</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>giardinera</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>CHICKEN LIVER MOUSSE</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>choux pastry, fruit gelée, pistachios</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>BREAD & BUTTER</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>sourdough, compound butter</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>SPANISH CHORIZO</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>pickled basque peppers</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>WHIPPED RICOTTA CROSTINI</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>toasted pine nuts, hot honey</p>
        </div>

      </div>
    </div>
                
    <SectionTitle title="PLATES" />
                <div style={{ fontFamily: 'Arial, sans-serif',  color: '#000', textAlign: 'center', padding: '20px' }}>
                <div className='PLATES' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}> OYSTERS</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>salsa verde (4 per order)</p>
        </div>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>KALE CAESAR SALAD</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>watercress, crispy chickpeas, manchego</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>SHRIMP COCKTAIL</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>fresh horseradish, cocktail sauce </p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>PORK SLIDERS</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>boneless ribs, guava bbq, pepper slaw</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>SIBERIAN CAVIAR</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>tarragon egg salad, caramelized onion crème fraîche, salt & vinegar chipsMKT</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>COUNTRY STYLE PATE</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>mustard, pickled vegetables, cherry jam, baguette</p>
        </div>
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>SELECTION OF CHEESE & CHARCUTERIE</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>chef's selection of cheese & charcuterie</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>TOMATO SALAD</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>heirloom tomatoes, cucumber, herbs, tahini dressing</p>
        </div>
      </div>
    </div>
    
    <SectionTitle title="DESSERTS" />
                <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f4e1', color: '#000', textAlign: 'center', padding: '20px' }}>
      
      <div className='DESSERTS' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>PROFITEROLES</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>chocolate & hazelnut ricotta, cocoa nib tuile</p>
        </div>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>ZUCCHINI BREAD</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>yuzu curd, macerated blueberries</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>ESPRESSO MARTINI</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>vodka, espresso, galliano ristretto, licor 43, demerara</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>AMERICANO</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>AMERICANO</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>ESPRESSO</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>ESPRESSO</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>ASSORTED HOT TEAS</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>ASSORTED HOT TEAS</p>
        </div>
      </div>
    </div>
    <SectionTitle title="COCKTAILS" />
                <div style={{  backgroundColor: '#f8f4e1', color: '#000', textAlign: 'center', padding: '20px' }}>
          
      <div className='COCKTAILS' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>LONGFELLOW GIMLET</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>bison grass vodka, pear, lime, heather honey</p>
        </div>
        
        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>PASSION FRUIT NEGRONI</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>bimini gin, campari, vermouth, passion fruit, cacao</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>PINEAPPLE COLLINS</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>gin, blanc vermouth, pineapple, lemon, soda</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>MOONSTONE</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>vodka, muscat grape brandy, blanc vermouth, rosé aperitivo</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>ESMERELDA</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>mezcal, poblano, mint, cilantro, lime, sod</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>PARKSIDE MANHATTAN</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>rye whiskey, cointreau, strawberry amaro, vermouth</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>BELL RINGER</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>reposado tequila, génépy, lime, cinnamon, almond</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>FIVE OF CLUBS</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>highland & islay scotch whisky, cognac, peach</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>GOLDEN HOUR</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>aged rum, guava, orange, lemon, honey</p>
        </div>

        <div style={{ flexBasis: '45%', margin: '20px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>MARTINI</h2>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>plymouth gin, dry vermouth</p>
        </div>
      </div>
    </div>
    
    <SectionTitle title="FUNCTIONAL COCKTAIL" />
    <h2 style={{textAlign:'center',padding:'20px'}}>non-alcoholic</h2>
                <DrinkMenu items={drinks} />
                <div style={{ flexBasis: '45%', margin: '20px 0',justifyContent:'center',alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{  fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>AMERICANO</h2>
          <p style={{  fontSize: '16px', margin: '20px 0' }}>AMERICANO</p>
          <SectionTitle title="NON-ALCOHOLIC" />
          <div style={{ marginBottom: '10px', paddingTop: '40px' }} > 
          <p style={{  marginBottom: '10px',fontWeight: '', fontSize: '20px', }}>Bissell Bubbles Hop Water</p>
          <p style={{  marginBottom: '10px',fontWeight: '', fontSize: '20px', }}>KIT NA On Your Mark American Blonde</p>
          <p style={{  marginBottom: '10px',fontWeight: '', fontSize: '20px', }}>Saratoga Springs Sparkling Water</p>
          <p style={{  marginBottom: '40px',fontWeight: '', fontSize: '20px', }}>Saratoga Springs Still Water</p>
          </div>
        <SectionTitle title="BEER & CIDER" />
        <div style={{ fontWeight: '', fontSize: '20px', marginBottom: '10px', paddingTop: '40px' }}> 
        <p style={{ marginBottom: '10px' }} >Allagash White</p>
          <p >Oxbow Brewing Company Farmhouse Pale Ale</p>
          <p style={{ marginBottom: '10px' }}>Maine Beer Company Lunch IPA</p>
          <p style={{ marginBottom: '10px' }}>Orange Bike Brewing Co. Pilsner (gf)</p>
          <p style={{ marginBottom: '10px' }}>Sacred Profane Pale Ale Lager</p>
          <p style={{ marginBottom: '10px' }}>Miller High Life Lager</p>
          <p style={{ marginBottom: '10px' }}>Eric Bordelet "Authentique" Poire Cidre Normandy</p>
          <p style={{ marginBottom: '40px' }}>Absolem Cider Float Away</p>
          </div>
          </div>
          <SectionTitle title="BEVERAGES" />
          <DrinkMenu items={BEVERAGES} />
            </section>
              <Slider images={images} />
                <Footer />
        </div>
    );
}

export default Club;
