import axios from 'axios';
import Reminder from '../utils/Reminder';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
  async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }
  async addReminder(title: string) {
    const response = await this.http.post<Reminder[]>('/todos', { title });
    return response.data;
  }
  async RemoveReminder(id: number) {
    const response = await this.http.delete<Reminder[]>(`todos/${id}`);
    return response.data;
  }
}
export default new ReminderService();
