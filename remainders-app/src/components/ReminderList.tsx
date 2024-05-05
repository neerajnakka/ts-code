import React from 'react';
import Reminder from '../utils/Reminder';

//declare type for props using interface
//naming convention is use the function name followed by Props
interface ReminderListProps {
  items: Reminder[];
}
const ReminderList = (props: ReminderListProps) => {
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
