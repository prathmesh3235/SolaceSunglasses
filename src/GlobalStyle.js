import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  // margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  
}
@media screen and (max-width: 1024px) {
  .virtual-text {
      display: none !important;
  }
  .virtual-container {
    display: flex;
      padding: 1px;
      border: 0 solid !important;
      border-width:0;
      border-color: #364F6B;
      border-radius:0;
      margin-left:100px;
      margin-right:100px;
      margin-top:50px;
      margin-bottom:50px;
      padding:5px;
  }
  .single-product-page {
    flex-direction: column;
    height: auto !important;
  }

}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  width:100%;
  height:100%;
  position:relative;
  font-family: $round;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }

    .price{
      color: black;
    }    
    
    }
    .btn-prod{
      background-color:black;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 10px;
    }    
    .single-product-page{
      display:flex;
      margin:60px;
      width: 100%;
      height: 500px;
      justify-content: space-around;
     

      // .product-image{
      //   padding:50px;
      //   padding-right: 50px;
      //   img{
      //     height:200px;
      //     width:300px;
      //   }
        
        
      }
    }    

.w-100 {
  height: auto !important;
}   
.slider-block {
  //background-color: black;
  width: 60%;

}

.snip{
  height: 100%;
  width: 100%;
}
.productlist{
  
  
    background-color: var(--main-top-background-color);
    margin: 30px 30px 30px 30px;
    padding: 30px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    border-radius: .15rem;
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
    gap: 20px;
    font-family: 'Inconsolata', monospace;
    font-size: 3em;
    color: #364F6B;
    justify-content: space-around;
    h4{
      position:absolute;
      color:$text;
      font-size:2.5vw;
      // margin:-30px 200px;
      text-align:left;
      background-color: #FCE698;
      
      
      // -webkit-box-sizing: border-box;
      //         box-sizing: border-box;
      // -webkit-box-pack: justify;
      //     -ms-flex-pack: justify;
      //         justify-content: space-between;
      // -ms-flex-wrap: wrap;
      //     flex-wrap: wrap;   
    }
    .button.is-primary {
      background-color:  #364F6B;
      padding:3px;
      border: none;
      color: white;
     //padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin:-7px;
  }

  
  
  .button.is-primary:hover {
      background-color: #FCE698;
      color: #364F6B;
      padding:3px;
      border: none;
     //padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin:-7px;
      border: 2px;

  }

 
  
  
  .content {
    margin-bottom: 10px;
  }
  
  .title {
      color: var(--main-accent-color);
      font-family: 'Inconsolata', monospace;
      font-size: 3em;
  }
  
  #inner-large-banner {
      height: 40%;
      width: 100%;
      background-image: url('img/forest.jpg');
      background-size: cover;
      background-position: 50% 25%;
  }
  
  #wrapper {
      width: 80%;
      min-height: 70%;
      /* margin-top: -100px; */
      background-color: var(--main-top-background-color);
      margin: -100px auto 0 auto;
      padding: 30px;
      box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
      border-radius: .25rem;
  }
  
  #product-catalog {

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px;
      margin-top:500px;
  }
  
  :root {
    --main-background-color: red;
    --main-top-background-color: red;
    --main-accent-color: red;
    --title-color: red;
}
  .product-title {
      font-size: 1em;
  }
    
}
    
 }
 
body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;
   

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: #364F6B;
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #364F6B;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    .card {
      //background-color: #F8F6F4;
      border: 3px;
      border-style: groove;
      border-color: black;
    
      height: 230px;
      width: 250px;
      font-size: 15px;
      text-decoration-color: aliceblue;
      margin-right: 5rem;
      padding: 10px;
      
      margin-top: 50px;
      overflow-wrap: normal;
    
    }
    
    .card: hover{
      transform: scale(1.3);
      transition: transform .5s ease;

    }
    .card-content{
      text-align: center;
      font-family: Tahoma;
      font-size:15px;
      //font-family: bold;
      
    }
.product-page{
  h1{
    text-align: center;
  }
}
    

  
    img{
      height: 100px;
      width: 210px;
      background-size: 100%;
    
    }
    .virtual-container{
      display: flex;
      padding: 1px;
      border: 1px solid;
      border-style: groove;
      border-width:5px;
      border-color: #364F6B;
      border-radius:20px;
      margin-left:100px;
      margin-right:100px;
      margin-top:50px;
      margin-bottom:50px;
      padding:5px;
      

      .virtual-text{
        align-items: center;
        width:80%;
        // margin:20px;
      }

    .vertical-center{
      padding:10px;
    }  
    }
    h4{
      position:absolute;
      color:$text;
      font-size:2.5vw;
      font-weight:bold;
      // margin-left: 350px;
      // margin-top: 20px;
      // margin-bottom: 20px;
      
      
      text-align:center;
      // background-color: #FCE698;
      
      
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;   
    }
  
    .productlistHead {
      text-align:center;
      display: flex;
      justify-content: center;
      h4 {
        
        margin-top: 50px;
      }
    }

`;