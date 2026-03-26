import "./App.css";
import Averages from "./components/averages/Averages";
import Trends from "./components/Trends";
import Hero from "./components/Hero";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getData, initStorage } from "./util/storage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userEntries, setUserEntries] = useState([]);
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    initStorage();

    const data = getData();
    const currentUserId = data.currentUserId;

    const foundUser = data.users.find((user) => user.id === currentUserId);

    const entries = data.moodEntries.filter(
      (entry) => entry.userId === currentUserId,
    );

    setCurrentUser(foundUser);
    setUserEntries(entries);
    setQuotes(data.moodQuotes);
  }, []);

  // To re-render the component when mood-log submit
  function addNewEntry(newEntry) {
    setUserEntries((prev) => [...prev, newEntry]);
  }

  return (
    <div className="max-w-292.5 px-4 md:px-8 xl:px-0 pt-8 md:pt-10 pb-20 mx-auto flex flex-col justify-start">
      <div className="flex flex-col gap-12">
        <Header currentUser={currentUser} />
        <Hero
          onAddEntry={addNewEntry}
          currentUser={currentUser}
          userEntries={userEntries}
          moodQuotes={quotes}
        />
      </div>
      <div className="flex flex-col gap-8 xl:flex-row">
        <Averages moodEntries={userEntries} />
        <Trends moodEntries={userEntries} />
      </div>
    </div>
  );
}

export default App;
