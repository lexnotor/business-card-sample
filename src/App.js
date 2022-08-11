import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Contact />
      <Post titre='About'>
        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
      </Post>
      <Post titre='Interests'>
        Food expert. Music sholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </Post>
      <Footer />
    </div>
  );
}

export default App;
