import conf from './components/conf'
import Calendar from './components/calendar'

export function createCalendar() {
  return new Calendar(conf).create()
}
