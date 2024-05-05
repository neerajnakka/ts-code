/* eslint-disable @typescript-eslint/no-unused-vars */
import ReminderList from './components/ReminderList';
import Reminder from './utils/Reminder';
import { useEffect, useState } from 'react';
import ReminderService from './services/Reminder';
//declare types for hooks
//we declare types for hooks using <type>
//we always use generic types in hooks

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  // const [loading,setLoading] = useState<boolean>(false) no need to explicityly mention boolean as ts infers itself the type

  useEffect(() => {
    loadReminders();
  }, []);
  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
