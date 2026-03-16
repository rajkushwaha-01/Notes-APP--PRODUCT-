import React, { useState, useEffect } from "react";

const App = () => {

  const [notes, setNotes] = useState([]);
  const [showCard, setShowCard] = useState(false);

  async function fetchNotes() {
  const res = await fetch("http://localhost:3000/api/notes");
  const data = await res.json();
  setNotes(data.allNotes);
}

  useEffect(() => {
    fetchNotes();
  }, []);

  function inputHandler() {
    setShowCard(true);
  }

  return (
    <div className="bg-white flex justify-between">

      <div className="h-[100vh] bg-gray-200 rounded-xl py-3 px-8">
        <h1 className="text-xl my-3 font-bold">Docket</h1>

        <img
          onClick={inputHandler}
          className="h-10 my-7 cursor-pointer"
          src="add.png"
          alt=""
        />
      </div>

      <div className="h-[100vh] bg-gray-200 w-[91%] px-5 py-3">

        <input
          className="h-8 my-3 px-5 py-2 rounded-2xl border"
          type="text"
          placeholder="search.."
        />

        <h1 className="text-4xl my-3 font-bold">Notes</h1>

        <div className="h-[80vh] bg-pink-200 grid grid-cols-4 gap-4 p-4">

          {notes.map((data) => (
            <div
              key={data._id}
              
              className="h-48 w-48 bg-emerald-600 p-3 rounded-xl"
            >
               
              <h1 className="text-lg font-bold">{data.title}</h1>
              <p>{data.description}</p>
            </div>
          ))}

        </div>
      </div>

      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="h-60 w-96 bg-white rounded-2xl shadow-xl p-5 relative">

            <button
              onClick={() => setShowCard(false)}
              className="absolute top-2 right-3 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-3">New Note</h2>

            <form action="http://localhost:3000/api/notes" method="post">

              <input
                name="title"
                type="text"
                className="w-full h-12 border rounded-lg p-2"
                placeholder="Write your note-title..."
              />

              <input
                name="description"
                type="text"
                className="w-full my-2 h-12 border rounded-lg p-2"
                placeholder="Write your note-description..."
              />

              <button className="bg-emerald-600 py-2 px-5 rounded-xl active:scale-95">
                Create notes
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default App;