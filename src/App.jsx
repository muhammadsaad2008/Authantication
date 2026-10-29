// import   "./App.Css";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
 function App() {
  return(
    <div>
      <h1>This is Clerk Authentication</h1>
      <header>
        <Show when="signed-out">
          <SignInButton  fallbackRedirectUrl={"./dashboard"} forceRedirectUrl={"./dashboard"} />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      <main>
        <Show when="signed-out">
          <p>Please sign in to access the dashboard.</p>
        </Show>
        <Show when="signed-in">
          <p>Welcome to your dashboard!</p>
        </Show>
      </main>
      
    </div>
  )
  
 }
 export default App;