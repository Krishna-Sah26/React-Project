import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Myapp() {
  
  return (
    <div>
      <h1>custom my app</h1>
      <p>This is my custom React application.</p>
    </div>
  );
}

const anotherElement=(
  <a href="https://www.google.com" target="_blank">Google</a>
);

   


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Myapp />
    {anotherElement}
  </StrictMode>
);
