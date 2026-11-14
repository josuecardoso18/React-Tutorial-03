import { useState } from 'react'
import Header from './components/Header'
import CourseSection from './components/CourseSection'
import VideoPlayer from './components/VideoPlayer'
import { newCourses, pendingCourses, suggestedCourses } from './data/courses'

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  return <main className="app-shell">
    <Header />
    <div id="cursos" className="catalog">
      <CourseSection title="Nuevos cursos" courses={newCourses} onSelect={setSelectedCourse} />
      <CourseSection title="Cursos pendientes" courses={pendingCourses} pending onSelect={setSelectedCourse} />
      <CourseSection title="Te podrían interesar" courses={suggestedCourses} onSelect={setSelectedCourse} />
    </div>
    <VideoPlayer course={selectedCourse} onClose={() => setSelectedCourse(null)} />
  </main>
}
