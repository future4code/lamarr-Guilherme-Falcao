import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'leozera'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/C5103AQG1P5ma_6sqyg/profile-displayphoto-shrink_200_200/0/1517275479726?e=1661990400&v=beta&t=RCtF2soLzoO2E7zqRNh4hIe3NDrFMRAl2PG1vyae9q4'}
            fotoPost={'https://media.istockphoto.com/photos/colorful-flags-and-decorative-balloon-for-the-saint-john-party-which-picture-id1405434550?k=20&m=1405434550&s=612x612&w=0&h=z6pbXSfKx_514UybGXAGt6yDvnt9pBsB8RZXpI55U_I='}
          />
          <Post
            nomeUsuario={'guiii'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/D4E03AQG1BARsxH3h9Q/profile-displayphoto-shrink_200_200/0/1648414713849?e=1661990400&v=beta&t=H2y-Jwau1pW8vf7OpjnRty2Vwatg5bPD-amV8nnOybY'}
            fotoPost={'https://images.unsplash.com/photo-1565841631075-99fc4dcaafd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
          />
          <Post
            nomeUsuario={'vitaum'}
            fotoUsuario={'https://media-exp2.licdn.com/dms/image/C4D03AQFFZSK7Q-8pTg/profile-displayphoto-shrink_200_200/0/1545754980434?e=1661990400&v=beta&t=pIB-Z6j22gRDCjSybHMgHKOlntDe23P5HBKPqvoWyx8'}
            fotoPost={'https://images.unsplash.com/photo-1471180625745-944903837c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'}
          />
  </div>
)

}


export default App;
