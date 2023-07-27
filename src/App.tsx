
function App() {
  return (
    <div className="h-screen bg-blue-200 flex justify-center items-center">
      <div className="flex max-h-[600px] max-w-[940px] bg-gray-200 rounded-xl">
        <div>
          <div>
            Step 1
            Your Info
          </div>
          <div>
            Step 2
            Select Plan
          </div>
          <div>
            Step 3
            Add-ons
          </div>
          <div>
            Step 4
            Summary
          </div>
        </div>

        <div>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>

          <form action="" id="step-1">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" />

            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone"/>

            <button>Next Step</button>
          </form>
        </div>
     </div>
    </div>
  );
}

export default App;

// ETA 8 hours
// START AT 8PM
