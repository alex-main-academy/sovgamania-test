import Link from 'next/link';
import CompletedTaskCard from '../components/CompletedTaskCard/CompletedTaskCard';
import { completedTaskItems } from './completedTaskItems';
import './completed-task.scss';

export default function CompletedTask() {
  return (
    <div className="page completed-task">
      <div className="container">
        <h1 className="completed-task__title">
          <span className="completed-task__title--top">congratulations!</span>
          <span className="completed-task__title--bottom">
            the task is completed.
          </span>
        </h1>
        <ul className="completed-task__list">
          {completedTaskItems.map((item) => {
            return (
              <li key={item.id} className="completed-task__item">
                <CompletedTaskCard item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Link href="/tasks" className="completed-task__link">
        claim your prize
      </Link>
    </div>
  );
}
